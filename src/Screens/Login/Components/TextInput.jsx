import { TextField } from "@mui/material";
import { styled } from "@mui/system";



const StyledInput = styled(TextField)(({ theme }) => ({
    color: '#fff',
    fontSize: '1.15rem',
    width: '100%',
    padding: theme.spacing(.5, 1),
    borderRadius: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    letterSpacing: '1px',
    zIndex: 3,
    '& .MuiInputBase-input': {
        color: '#fff', // Make the text color white
        fontWeight: 'bold', // Make the text bold
      },
    '& + .MuiFormLabel-root': {
        marginTop: theme.spacing(1.5),
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderRadius: '1.5rem',
            borderColor: 'rgba(255, 255, 255, 0.5)', // Add this line
        },
        "&:hover fieldset": {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        "&.Mui-focused fieldset": {
            borderColor: 'rgba(255, 255, 255, 0.1)', // Add this line
        },
    },
}));

export default StyledInput;