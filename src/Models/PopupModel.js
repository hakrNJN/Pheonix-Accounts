import React from 'react';
import { Modal, Box, Typography, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  },
  palette: {
    primary: {
      main: '#007aff',
    },
    error: {
      main: '#ff3b30',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export const Popup = ({ message }) => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(50);

  React.useEffect(() => {
    // update the progress every 50ms
    const timer = setInterval(() => {
      setProgress((oldProgress) => Math.max(oldProgress - 1, 0));
    }, 50);

    // close the popup and go back to the previous page after 5 seconds
    const timeoutId = setTimeout(() => {
      navigate(-1);
    }, 3000);

    // clean up the interval and timeout when the component unmounts
    return () => {
      clearInterval(timer);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Modal open={true}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Error
            </Typography>
            <ErrorIcon color="error" />
          </Box>
          <Typography variant="body1">{message}</Typography>
          <LinearProgress variant="determinate" value={progress} color='success' />
        </Box>
      </Modal>
    </ThemeProvider>
  );
};