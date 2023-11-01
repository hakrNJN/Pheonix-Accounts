import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// Define a general API calling function
const callApi = async ({ endpoint, method, data, headers }) => {
    try {
        const response = await axios({
            url: endpoint,
            method,
            data,
            headers,
        });
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    } catch (error) {
        if (!error.response) {
            throw new Error('Network error');
        }
        throw error;
    }
};

// Define your custom hooks
export const useApiQuery = (endpoint, headers) => {
    return useQuery(['apiData', endpoint], () => callApi({ endpoint, method: 'GET', headers }));
};

export const useApiMutation = (method, endpoint, data, headers) => {
    const queryClient = useQueryClient();
    return useMutation(() => callApi({ endpoint, method, data, headers }), {
        onError: (error) => {
            // Optional: Show a notification or something
            console.error('Error performing mutation:', error);
        },
        // Optional: On success, invalidate queries that depend on this data
        onSuccess: () => {
            queryClient.invalidateQueries('apiData');
        },
    });
};


//======================USES of this controller
// import { useApiQuery, useApiMutation } from './apiController';

// function MyComponent() {
//   const { data, isLoading, error } = useApiQuery('/my-endpoint', { Authorization: 'Bearer my-token' });
//   const mutation = useApiMutation('POST', '/my-endpoint', { key: 'value' }, { Authorization: 'Bearer my-token' });

//   const handleClick = () => {
//     mutation.mutate();
//   };

//   if (isLoading) return 'Loading...';
//   if (error) return `An error occurred: ${error.message}`;

//   return (
//     <div>
//       <div>{data}</div>
//       <button onClick={handleClick}>Send Data</button>
//       {mutation.isError && <div>An error occurred when sending data: {mutation.error.message}</div>}
//     </div>
//   );
// }
