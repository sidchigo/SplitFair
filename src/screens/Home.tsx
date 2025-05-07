import {useNavigation, NavigationProp} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {Button} from '@react-navigation/elements';

type RootStackParamList = {
  Login: undefined;
};

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Login')}>Go to Login</Button>
    </View>
  );
}

export default HomeScreen;
