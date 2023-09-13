import axios from "axios";
// import { UserAbility } from "../Abilities/UserAbility";
// import { Firestore } from "../Controllers/firestoreController";


export const menuClasses = {
    root: 'ps-menu-root',
    menuItemRoot: 'ps-menuitem-root',
    subMenuRoot: 'ps-submenu-root',
    button: 'ps-menu-button',
    prefix: 'ps-menu-prefix',
    suffix: 'ps-menu-suffix',
    label: 'ps-menu-label',
    icon: 'ps-menu-icon',
    subMenuContent: 'ps-submenu-content',
    SubMenuExpandIcon: 'ps-submenu-expand-icon',
    disabled: 'ps-disabled',
    active: 'ps-active',
    open: 'ps-open',
};

export const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH:'PATCH'
};

export const formatDate = (date) => {
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/-/g, '/');
}

export const getUrl = ({apiUrl,endpoint,params={}}) => {
  const buildQueryParams = (params) => {
    if (!params || typeof params !== 'object') {
      throw new Error('Invalid params');
    }
    return Object.entries(params)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          // Handle arrays differently
          const encodedValue = encodeURIComponent(`[${value.join(',')}]`);
          return `${encodeURIComponent(key)}=${encodedValue}`;
        } else {
          // Handle non-array values as before
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
      })
      .join('&');
  };
  const query = (Object.keys(params).length !== 0) ? `?${buildQueryParams(params)}` : '';

  const url = `${apiUrl}${endpoint}${query}`;
  return url;
}



// Cache for storing HTTP responses
const cache = new Map();

export const clearCache = (endpoint) => {
  // Remove all cached responses for the specified endpoint
  for (const [key] of cache) {
    if (key.includes(endpoint)) {
      cache.delete(key);
    }
  }
};


// const getSkipEndpoints = async() => {
//   const apiEndPoints = new Firestore('apiEndPoints');
//   const response = await apiEndPoints.read('ExcludedEndpoints')
//   return response.data.Endpoints
// }

export const makeRequest = async ({ method, apiUrl, endpoint, params = {}, data = {}, user, headers = {}, timeout = 0, retries = 3 }) => {


  // Validate apiUrl
  try {
    new URL(apiUrl);
  } catch (error) {
    throw new Error('Invalid apiUrl: apiUrl must be a valid URL');
  }

  // Validate endpoint
  if (typeof endpoint !== 'string' || endpoint.length === 0) {
    throw new Error('Invalid endpoint: Endpoint must be a non-empty string');
  }

  // Validate method
  if (!['GET', 'POST', 'PUT', 'DELETE'].includes(method)) {
    throw new Error(`Invalid method: ${method} is not a valid HTTP method`);
  }

  // Retrieve the array of endpoints that should not be checked for user permissions
  // const skipEndpoints = await getSkipEndpoints();

  // if (!skipEndpoints.includes(endpoint)) {
  //   // Check user permissions
  //   if (!user || !user.permissions) {
  //     throw new Error('User not found');
  //   }

  //   const userAbility = new UserAbility(user);
  //   await userAbility.ready;

  //   if (!userAbility.canAccessEndpoint(endpoint)) {
  //     throw new Error(`Access denied: User does not have permission to access ${endpoint}`);
  //   }

  //   if (!userAbility.canUseMethod(method)) {
  //     throw new Error(`Access denied: User does not have permission to use ${method} method`);
  //   }
  // }

  const url = getUrl({ apiUrl, endpoint, params });
  console.log(`Making ${method} request to ${url}`);

  // Check cache for GET requests
  if (method === 'GET' && cache.has(url)) {
    console.log(`Returning cached response for ${url}`);
    return cache.get(url);
  }

  const config = {
    method,
    url,
    headers: {
      ...headers,
      'X-User': JSON.stringify(user)
    },
    timeout
  };

  if (method !== 'GET') {
    config.data = data;
  }

  let attempts = 0;
  while (attempts < retries) {
    try {
      const response = await axios(config);
      // console.log(`Received response with status code ${response.status}`);

      // Cache GET responses
      if (method === 'GET') {
        cache.set(url, response.data);
      }

      return response.data;
    } catch (error) {
      console.error(error);

      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          throw new Error(`Not found: ${endpoint} does not exist`);
        } else if (status === 401) {
          throw new Error('Unauthorized: User does not have permission to access this resource');
        } else if (status >= 500) {
          throw new Error('Server error: An error occurred on the server');
        }
      }
      attempts++;
      if (attempts === retries) {
        throw error;
      }
    }
  }
};




// const getUrl = ({apiUrl,endpoint,params}) => {
//   const buildQueryParams = (params) => {
//     if (!params || typeof params !== 'object') {
//       throw new Error('Invalid params');
//     }
//     return Object.entries(params)
//       .map(([key, value]) => {
//         if (Array.isArray(value)) {
//           // Handle arrays differently
//           const encodedValue = encodeURIComponent(`[${value.join(',')}]`);
//           return `${encodeURIComponent(key)}=${encodedValue}`;
//         } else {
//           // Handle non-array values as before
//           return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
//         }
//       })
//       .join('&');
//   };
//   const query = (Object.keys(params).length !== 0) ? `?${buildQueryParams(params)}` : '';

//   const url = `${apiUrl}${endpoint}${query}`;
//   console.log(url)
//   return url;
// }

// Cache for storing HTTP responses