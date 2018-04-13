import { blue, green, purple, yellow } from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';
import { Theme } from 'material-ui/styles/createMuiTheme';

export const theme1: Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#1badeb',
      main: '#1badeb',
      dark: '#1badeb'
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
});

export const theme2: Theme = createMuiTheme({
  palette: {
    primary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700]
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
  },
});

export const getTheme = ((theme: string) => {
  switch (theme) {
    case 'main':
      return theme1;
    case 'sub':
      return theme2;
    default:
      return theme1;
  }
});
