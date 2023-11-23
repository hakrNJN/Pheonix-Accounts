import { createTheme } from '@mui/material/styles';


const LightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FAACA8',
          backgroundImage: `linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)`,
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#61919F'
    },
    secondary: {
      main: '#B0E0E9'
    },
    accent: {
      main: '#DEF1F8'
    },
    white: {
      main: '#f1f1f1'
    },
    black: {
      main: '#b2b2b2'
    },
    background: {
      default: '#FAACA8', // set the default background color
    },
  },
  typography: {
    fontFamily: ['Arial',],
    fontSize: 14,
    fontWeight: 'medium'
  }
})

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#2b3141', // set the default background color for dark mode
      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://s6.imgcdn.dev/RaJB9.jpg)`,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2b3141', // Or any color you want
        },
      },
    },
  },
});


export { LightTheme, DarkTheme }