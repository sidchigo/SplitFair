import {useState} from 'react';
import {View, Text} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';

function LoginScreen() {
  const [mobile, setMobile] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Section
        title="Sign in to your Account"
        subtitle="Enter your whatsapp number to log in"
      />
      <Input label="Mobile" value={mobile} setValue={setMobile} />
      <BaseButton variant="primary">Get OTP</BaseButton>
    </View>
  );
}

export default LoginScreen;
