import { FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";


const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingTop: 8,
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    fontSize: '.75rem',
    marginBottom: theme.spacing(1),
    position: 'relative',
    zIndex: 3,
}));
  
export default StyledFormControlLabel;