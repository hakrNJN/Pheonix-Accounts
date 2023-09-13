import React from 'react';
import { useSelector } from 'react-redux';
// import { UserAbility } from '../Abilities/UserAbility';
import { Popup } from '../Models/PopupModel';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { ErrorController } from '../Controllers/ErrorController';


export const PrivateElement = ({ path, children }) => {
    const user = useSelector((state) => state.auth.user);
    const [isAllowed, setIsAllowed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const checkPermission = async () => {
        // try {
        //   if (user.permissions.group === 'SuperAdmin') {
        //     setIsAllowed(true);
        //   } else {
        //     console.log(user)
        //     const userAbility = new UserAbility(user);
        //     if (await userAbility.canNavigate(path)) {
        //       setIsAllowed(true);
        //     }
        //   }
        // } catch (err) {
        //   setError(err);
        // } finally {
        //   setIsLoading(false);
          // }
        console.log('implement logic to check user Permission')
      };
      checkPermission();
    }, [user, path]);
  
    if (isLoading) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
  
    if (error) {
      ErrorController.handleError(error)
    }
  
    if (isAllowed) {
      return children;
    }
  
    return <Popup message="You do not have permission to access this page." />;
  }