import { createTheme } from '@material-ui/core/styles';

// https://coolors.co/9246ff

const theme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: '#ffffff',
      dark: '#000712',
      paper: '#000712',
      alt: '#012A6D',
      'alt-2': '#2F2F37',
      accent: '#013891',
      'accent-alt': '#013891',
      'accent-alt-2': '#013891',
    },
    primary: {
      main: '#0261FE',
    },

    purple: {
      light: '#e2dbf0',
      main: '#6441a4',
      dark: '#201c2b',
    },

    gray: {
      light: '#e5e3e8',
      main: '#424242',
      dark: '#232127',
    },

    fill: {
      brand: '#9246ff',
      info: '#1e69ff',
      warn: '#fdca61',
      alert: '#e81b16',
      success: '#3ce3c9',
    },
  },
});

export default theme;
