import * as React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import lightTheme from './src/styles/lightTheme';
import darkTheme from './src/styles/darkTheme';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screenOptions: {
    headerShown: false,
    // contentStyle: {
    //   backgroundColor: 'transparent',
    // },
  },
  screens: {
    Login: LoginScreen,
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = !isDarkMode ? darkTheme : lightTheme;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          padding: 16,
        }}>
        <StatusBar animated translucent barStyle="dark-content" />
        <Navigation theme={theme} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
