import { blue, green, purple, yellow } from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';
import { Theme } from 'material-ui/styles/createMuiTheme';

export const theme = (themeObj: any): Theme => {
  return (
    createMuiTheme({
      palette: {
        primary: {
          light: themeObj.primaryColor,
          main: themeObj.primaryColor,
          dark: themeObj.primaryColor
        },
        secondary: {
          light: themeObj.secondaryColor,
          main: themeObj.secondaryColor,
          dark: themeObj.secondaryColor
        }
      },
    }));
};

export const getTheme = ((themeObj: any): Theme => {
  return theme(themeObj);
});
