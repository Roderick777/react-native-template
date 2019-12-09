// import * as React from 'react';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default theme;