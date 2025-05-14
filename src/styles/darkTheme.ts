import {DarkTheme} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from './colors';

const darkTheme = {
  ...DarkTheme,
  Colors: {
    background: colors.white,
  },
};

export default darkTheme;
