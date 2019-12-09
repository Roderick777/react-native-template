// import * as React from 'react';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#3498db',
//     accent: '#f1c40f',
//   },
// };


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Inicio from './components/Inicio.js';
import Login from './components/Login.js';
import Captura from './components/Captura.js';
const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  Inicio: {screen: Inicio},
  Captura: {screen: Captura}

});

const App = createAppContainer(MainNavigator);

export default App;