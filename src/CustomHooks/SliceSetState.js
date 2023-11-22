import { useDispatch } from 'react-redux';

// Custom hook to dispatch an action and set the state
export function useSetState(slice) {
  const dispatch = useDispatch();

  return (action, data) => {
    dispatch(slice.actionsaction);
  };
}

//Use of the hook in my components
// import { useSetState } from './path-to-your-custom-hook';
// import { authSlice } from './path-to-your-auth-slice';

// function YourComponent() {
//   const setState = useSetState(authSlice);

//   // ...

//   // When you want to log in
//   setState('setToken', yourToken);
//   setState('setUser', yourUser);

//   // When you want to log out
//   setState('logout');
// }