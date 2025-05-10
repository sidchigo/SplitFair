import {useState} from 'react';
import {View, Text} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import Divider from '../components/Divider';
import {useNavigation} from '@react-navigation/native';
import baseStyles from '../styles/baseStyles';

function LoginScreen() {
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();

  return (
    <View style={baseStyles.layout}>
      <Section
        title="Sign in to your Account"
        subtitle="Enter your whatsapp number to log in"
      />
      <Input
        mode="numeric"
        label="Mobile"
        value={mobile}
        placeholder="Enter number"
        setValue={setMobile}
      />
      <BaseButton variant="primary" onPress={() => navigation.navigate('OTP')}>
        Get OTP
      </BaseButton>
      <Divider />
      <BaseButton
        variant="secondary"
        onPress={() => navigation.navigate('Register')}>
        Register via mobile number
      </BaseButton>
    </View>
  );
}

export default LoginScreen;
