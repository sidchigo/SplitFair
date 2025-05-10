import {useState} from 'react';
import {View, Text} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import Divider from '../components/Divider';
import {useNavigation} from '@react-navigation/native';
import baseStyles from '../styles/baseStyles';

function OTPScreen() {
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();

  return (
    <View style={baseStyles.layout}>
      <Section
        title="Enter OTP"
        subtitle="We have sent an OTP on your registered number"
      />
      <Input
        mode="numeric"
        label="OTP"
        value={mobile}
        setValue={setMobile}
        maxLength={4}
      />
      <BaseButton
        variant="primary"
        onPress={() => navigation.navigate('NewUser')}>
        Login
      </BaseButton>
    </View>
  );
}

export default OTPScreen;
