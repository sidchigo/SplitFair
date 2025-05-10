import React, {useState} from 'react';
import {View} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import baseStyles from '../styles/baseStyles';

function NewUserPaymentScreen() {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  return (
    <View style={baseStyles.layout}>
      <Section
        title="Payment UPI"
        subtitle="Copy your UPI id from favourite UPI "
      />
      <Input
        label="UPI ID"
        value={name}
        setValue={setName}
        placeholder="username@upi"
        maxLength={45}
      />

      <BaseButton variant="primary" onPress={() => navigation.navigate('Home')}>
        Proceed
      </BaseButton>
    </View>
  );
}

export default NewUserPaymentScreen;
