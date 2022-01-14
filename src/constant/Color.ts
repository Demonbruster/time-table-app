import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const light = {
  background: '#fafafa',
  text: '#212121',
  primary: '#3f51b5',
  secondary: '#ff4081',
  accent: '#ff4081',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  cardBackground: '#fff',
};

const dark = {
  background: '#212121',
  text: '#fafafa',
  primary: '#3f51b5',
  secondary: '#ff4081',
  accent: '#ff4081',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  cardBackground: '#424242',
};

const myDfaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...light,
  },
};

const myDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...dark,
  },
};

export default {
  myDfaultTheme,
  myDarkTheme,
};
