import * as React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import lightTheme from './src/styles/lightTheme';
import darkTheme from './src/styles/darkTheme';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import OTPScreen from './src/screens/OTP';
import RegisterScreen from './src/screens/Register';
import NewUserScreen from './src/screens/NewUser';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'NewUser',
  screenOptions: {
    headerShown: false,
    animation: 'ios_from_right',
  },
  screens: {
    Login: LoginScreen,
    Home: HomeScreen,
    OTP: OTPScreen,
    Register: RegisterScreen,
    NewUser: NewUserScreen,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

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
