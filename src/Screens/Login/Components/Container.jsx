
import {  Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'block',
    position: 'relative',
    borderRadius: '15px',
    margin: theme.spacing(16, 'auto', 0),
    padding: theme.spacing(20, 12, 0),
    width: '100%',
    maxWidth: '525px',
    minHeight: '680px',
    backgroundImage: 'url(https://i.pinimg.com/736x/d2/60/cb/d260cb070d0b8ccf3809eb171581f6d9.jpg)',
    boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.85)',
    '&:after': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        borderRadius: '15px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'radial-gradient(ellipse at left bottom, rgba(22, 24, 47, 1) 0%,rgba(38, 20, 72, .8) 59%, rgba(17, 27, 75, .6) 100%)',
        boxShadow: '0 -20px 150px -20px rgba(0, 0, 0, 0.5)',
    },
}));

export default StyledContainer;