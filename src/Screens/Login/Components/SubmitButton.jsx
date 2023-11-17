import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledSubmit = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    fontSize: '1rem',
    fontFamily: "'Montserrat', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: theme.spacing(4),
    padding: theme.spacing(.75),
    borderRadius: '2rem',
    display: 'block',
    width: '100%',
    backgroundColor: 'rgba(17, 97, 237, .75)',
    border: 'none',
    cursor: 'pointer',
    zIndex: 3,
    '&:hover': {
        backgroundColor: 'rgba(17, 97, 237, 1)',
        zIndex: 3
    },
}));

export default StyledSubmit;