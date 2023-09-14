import { useTheme } from "@mui/system";
import {
    numberInputClasses,
} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';


const cyan = {
    50: "#E9F8FC",
    100: "#BDEBF4",
    200: "#99D8E5",
    300: "#66BACC",
    400: "#1F94AD",
    500: "#0D5463",
    600: "#094855",
    700: "#063C47",
    800: "#043039",
    900: "#022127"
};

const grey = {
    50: "#F3F6F9",
    100: "#E7EBF0",
    200: "#E0E3E7",
    300: "#CDD2D7",
    400: "#B2BAC2",
    500: "#A0AAB4",
    600: "#6F7E8C",
    700: "#3E5060",
    800: "#2D3843",
    900: "#1A2027"
};

function useIsDarkMode() {
    const theme = useTheme();
    return theme.palette.mode === "dark";
}

const Styles = () => {
    // Replace this with your app logic for determining dark mode
    const isDarkMode = useIsDarkMode();

    return (
        <style>
            {`
      .CustomInput {
        height:30px;
        min-width:200px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${isDarkMode ? grey[300] : grey[900]};
        background: ${isDarkMode ? grey[900] : "#fff"};
        border: 0.3px solid ${isDarkMode ? grey[700] : grey[200]};
        box-shadow: 0px 2px 10px ${isDarkMode ? cyan[800] : cyan[100]};

        &:hover {
          border-color: ${cyan[400]};
        }

        &:focus {
          border-color: ${cyan[400]};
          box-shadow: 0 0 0 3px ${isDarkMode ? cyan[600] : cyan[200]};
        }
        &:focus-visible {
          outline: 0;
        }
      }
      .FullWidth {
        width: 100% !important;
      }
      `}
        </style>
    );
}

const StyledInputRoot = styled('div')(
    ({ theme }) => `
    height:30px;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? cyan[900] : cyan[100]};
    display: grid;
    grid-template-columns: 1fr 19px;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
  
  
    &.${numberInputClasses.focused} {
      border-color: ${cyan[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? cyan[600] : cyan[200]};
    }
  
    &:hover {
      border-color: ${cyan[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);
const StyledInputElement = styled('input')(
    ({ theme }) => `
    height:30px;
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    grid-column: 1/2;
    grid-row: 1/3;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 12px;
    outline: 0;
  `,
);

const StyledButton = styled('button')(
    ({ theme }) => `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    appearance: none;
    padding: 0;
    width: 19px;
    height: 15px;
    font-family: system-ui, sans-serif;
    font-size: 0.875rem;
    line-height: 0.5;
    box-sizing: border-box;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 0;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      cursor: pointer;
    }
  
    &.${numberInputClasses.incrementButton} {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  
    &.${numberInputClasses.decrementButton} {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  
    & .arrow {
      transform: translateY(-1px);
    }
  `,
);



export { StyledButton, StyledInputElement, StyledInputRoot, Styles }