import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import Divider from '../components/Divider';
import {useNavigation} from '@react-navigation/native';
import baseStyles from '../styles/baseStyles';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPhoneNumber,
} from '@react-native-firebase/auth';

function RegisterScreen() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState<null | {
    confirm: (code: string) => Promise<any>;
  }>(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    console.log('RegisterScreen mounted');
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle login
  function handleAuthStateChanged(user: any) {
    console.log('User state changed:', user);
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  async function handleSignInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await signInWithPhoneNumber(getAuth(), phoneNumber);
    setConfirm(confirmation);
  }

  const handleOTP = async () => {
    // Check if the mobile number is valid
    if (mobile.length < 10) {
      // TODO: display error toast
      return;
    }

    // Number is valid then proceed to send OTP
    console.log('Sending OTP to:', mobile);
    await handleSignInWithPhoneNumber(`+91${mobile}`);
    // navigation.navigate('OTP');
  };

  const handleLogin = async () => {
    try {
      // Number is valid then proceed to send OTP
      await confirm?.confirm(code);
      navigation.navigate('NewUser');
    } catch (error) {
      console.log('Invalid code.');
      // TODO: display error toast
    }
  };

  if (confirm) {
    return (
      <View style={baseStyles.layout}>
        <Section
          title="Enter OTP"
          subtitle="We have sent an OTP on your registered number dude"
        />
        <Input
          mode="numeric"
          label="OTP"
          value={code}
          setValue={setCode}
          maxLength={6}
        />
        <BaseButton variant="primary" onPress={handleLogin}>
          Login
        </BaseButton>
      </View>
    );
  }

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
      <BaseButton variant="primary" onPress={handleOTP}>
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
