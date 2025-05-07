import * as React from 'react';
import {useColorScheme} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import lightTheme from './src/styles/lightTheme';
import darkTheme from './src/styles/darkTheme';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Login: LoginScreen,
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = !isDarkMode ? darkTheme : lightTheme;

  return <Navigation theme={theme} />;
}
