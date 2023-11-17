import { Typography } from "@mui/material";
import { styled } from '@mui/system';

const StyledLabel = styled(Typography)(({ theme }) => ({
    display: 'block',
    paddingLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingTop: 8,
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    fontSize: '1rem',
    marginBottom: theme.spacing(1),
    position: 'relative',
    zIndex: 3, // Add this line
}));

export default StyledLabel;