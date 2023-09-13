import React from 'react';
import {Modal} from '@mui/base/Modal';
import { Box, Typography, IconButton } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const ErrorModal = ({ open, error, onClose }) => {
  const theme = useTheme();
  return (
    <StyledModal open={true} onClose={onClose} slots={{ backdrop: StyledBackdrop }}>
      <Box sx={{ ...style, bgcolor: theme.palette.background.default, boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`, }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 0, right: 0 }}>
          <CloseIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ErrorIcon color="error" sx={{ mr: 2, fontSize: 32 }} />
          <Typography variant="h6" sx={{ fontSize: 24 }}>Error</Typography>
        </Box>
        <Typography variant="body1" sx={{ pt: 4 }}>{error.message}</Typography>
        {process.env.NODE_ENV !== 'development' && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Error code: {error.code}</Typography>
            <Typography variant="body2">Error stack:</Typography>
            <pre>{error.stack}</pre>
          </Box>
        )}
        <Typography variant="body2" sx={{ mt: 2 }}>Error code: {error.code}</Typography>
      </Box>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border:none;
`;

const StyledBackdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const style = {
  minWidth: 600,
  minHeight: 200,
  maxWidth: 800,
  maxHeight: 600,
  borderRadius: '12px',
  padding: '16px 32px 24px',
  position: 'relative',
};

export default ErrorModal;


