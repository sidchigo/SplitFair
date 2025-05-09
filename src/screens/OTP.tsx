import {useState} from 'react';
import {View, Text} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import Divider from '../components/Divider';

function OTPScreen() {
  const [mobile, setMobile] = useState('');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 24,
        marginTop: 100,
      }}>
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
      <BaseButton variant="primary">Login</BaseButton>
    </View>
  );
}

export default OTPScreen;
