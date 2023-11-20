import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';

// A custom styled button component that takes icon, label, onClick, width and height props from the parent component
// const RoundButton = styled(Button)(({ theme, width, height }) => ({
//   borderRadius: '15px',
//   boxShadow: theme.shadows[6],
//   padding: theme.spacing(1),
//   width: width || '80px', // default width is 80px, can be overridden by props
//   height: height || '25px', // default height is 25px, can be overridden by props
//   color: theme.palette.common.white, // button text color is white
//   backgroundColor: theme.palette.primary.light, // button background color is light blue
//   '&:hover': {
//     border: `1px solid ${theme.palette.primary.light}`, // button border color is same as background color on hover
//     filter: 'brightness(1.5)', // button brightness increases on hover
//   },
// }));



const StyledSubmit = styled(Button)(({ theme ,width, height}) => ({
    color: '#ffffff',
    fontSize: '1rem',
    fontFamily: "'Montserrat', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: theme.spacing(.75),
    borderRadius: '2rem',
    display: 'block',
    width: width || '160px', // default width is 80px, can be overridden by props
    height: height || '40px',// default height is 25px, can be overridden by props
    backgroundColor: 'rgba(17, 97, 237, .75)',
    border: 'none',
    cursor: 'pointer',
    zIndex: 3,
    '&:hover': {
      backgroundColor: 'rgba(17, 97, 237, 1)',
      filter: 'brightness(1.5)',
        zIndex: 3
    },
}));

const FlatButton = ({ icon, label, onClick, width, height }) => {
  return (
    <Box sx={{ px: 4 }}>
      <StyledSubmit variant="contained" onClick={onClick} width={width} height={height}>
        <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
          <Box width="25%" display="flex" justifyContent="center">
            {icon}
          </Box>
          <Box width="75%" sx={{pl:1, pr:2}} display="flex" justifyContent='center'>
            <Typography variant="button" display="block" gutterBottom>{label}</Typography>
          </Box>
        </Box>
      </StyledSubmit>
    </Box>
  );
}

export default FlatButton;

