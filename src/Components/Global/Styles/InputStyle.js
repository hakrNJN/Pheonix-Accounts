import { useTheme } from "@mui/system";

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

export default function Styles() {
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
