import {useState} from 'react';
import {View, Text} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import Divider from '../components/Divider';
import {useNavigation} from '@react-navigation/native';
import baseStyles from '../styles/baseStyles';

function RegisterScreen() {
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();

  return (
    <View style={baseStyles.layout}>
      <Section
        title="Enter your mobile number"
        subtitle="Whatsapp number is preferred"
      />
      <Input
        mode="numeric"
        label="Mobile"
        value={mobile}
        setValue={setMobile}
      />
      <BaseButton variant="primary" onPress={() => navigation.navigate('OTP')}>
        Get OTP
      </BaseButton>
      <Divider />
      <BaseButton
        variant="secondary"
        onPress={() => navigation.navigate('Login')}>
        Login
      </BaseButton>
    </View>
  );
}

export default RegisterScreen;
