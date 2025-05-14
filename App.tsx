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
import NewUserPaymentScreen from './src/screens/NewUserPayment';
import BillScreen from './src/screens/Bill';
import SelectGroupScreen from './src/screens/SelectGroup';
import AddMembersScreen from './src/screens/AddMembers';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
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
    NewUserPayment: NewUserPaymentScreen,
    Bill: BillScreen,
    SelectGroup: SelectGroupScreen,
    AddMembers: AddMembersScreen,
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

  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.Colors.background,
        }}>
        <StatusBar animated translucent barStyle="dark-content" />
        <Navigation theme={lightTheme} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
