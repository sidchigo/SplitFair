import {useState} from 'react';
import {View} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import baseStyles from '../styles/baseStyles';

function BillScreen() {
  const [billName, setBillName] = useState('');
  const navigation = useNavigation();

  return (
    <View style={baseStyles.layout}>
      <Section
        title="What is this bill for?"
        subtitle="Enter a unique name for your bill"
      />
      <Input
        mode="text"
        label="Bill Name"
        value={billName}
        placeholder="My Bill"
        setValue={setBillName}
      />
      <BaseButton
        variant="primary"
        onPress={() => navigation.navigate('SelectGroup')}>
        Add Bill Members
      </BaseButton>
    </View>
  );
}

export default BillScreen;
