import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';

// A custom styled button component that takes icon, label, onClick, width and height props from the parent component
const RoundButton = styled(Button)(({ theme, width, height }) => ({
  borderRadius: '15px',
  boxShadow: theme.shadows[6],
  padding: theme.spacing(1),
  width: width || '80px', // default width is 80px, can be overridden by props
  height: height || '25px', // default height is 25px, can be overridden by props
  color: theme.palette.common.white, // button text color is white
  backgroundColor: theme.palette.primary.light, // button background color is light blue
  '&:hover': {
    border: `1px solid ${theme.palette.primary.light}`, // button border color is same as background color on hover
    filter: 'brightness(1.5)', // button brightness increases on hover
  },
}));

const FlatButton = ({ icon, label, onClick, width, height }) => {
  // Destructure the icon, label, onClick, width and height props from the props object

  return (
    <Box sx={{ p: 8 }}>
      <RoundButton variant="contained" onClick={onClick} startIcon={icon} width={width} height={height}>
        <Typography variant="button" display="block" gutterBottom>{label}</Typography>
      </RoundButton>
    </Box>
  );
}

export default FlatButton;
