import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: [0, 4, 8, 16, 24, 32, 64],
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          color: 'white',  // Setting the text color to white
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#FFF',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Bai Jamjuree, Arial, sans-serif',
    subtitle1: {
      fontSize: 14
    },
    h4 : {
      fontSize: 18,
      fontWeight: 700
    },
    body1: {
      fontSize: 16
    }
  },
  palette: {
    primary: {
      main: '#7185AA ',
      light: '#E9EAF6',
      dark: '#764AF4'
    },
    secondary: {
      main: '#FFFF',
      light: '#17CFC4',
      dark:"#AEB5C1"
    },
    warning: {
      main: '#41479B',
      light: '#17CFC4',
    },
    background: {
      default: '#0d1119',
      paper: '#131823',
    },
  },
});

export default theme;
