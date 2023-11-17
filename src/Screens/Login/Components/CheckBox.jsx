import { Checkbox } from "@mui/material";
import { styled } from "@mui/system";


const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    position: 'relative',
    top: '.1rem',
    left: 0,
    margin: 0,
    zIndex: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:after': {
        color: 'rgba(255, 255, 255)',
    },
    '&.Mui-checked': { // Add this selector
        color: 'rgba(255, 255, 255, 0.7)', // Change the color as needed
    },
}));

export default StyledCheckbox;