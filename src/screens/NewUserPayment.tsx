import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  collection,
  getDocs,
  getFirestore,
} from '@react-native-firebase/firestore';

import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import baseStyles from '../styles/baseStyles';

const db = getFirestore();

function NewUserPaymentScreen() {
  const [upi, setUpi] = useState('');
  const navigation = useNavigation();

  const handleProceed = async () => {
    if (!upi) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
      return;
    }
    const payload = {
      upi,
    };
    try {
      // TODO: get user id from auth
      // await collection(db, 'users').doc('').update(payload);
      navigation.navigate('Home');
    } catch (error) {
      ToastAndroid.show('Registration failed', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={baseStyles.layout}>
      <Section
        title="Payment UPI"
        subtitle="Copy your UPI id from favourite UPI "
      />
      <Input
        label="UPI ID"
        value={upi}
        setValue={setUpi}
        placeholder="username@upi"
        maxLength={45}
      />

      <BaseButton variant="primary" onPress={handleProceed}>
        Proceed
      </BaseButton>
    </View>
  );
}

export default NewUserPaymentScreen;
