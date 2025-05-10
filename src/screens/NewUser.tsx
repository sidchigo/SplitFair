import React, {useState} from 'react';
import {View} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../components/DropDown';
import Switch from '../components/Switch';
import baseStyles from '../styles/baseStyles';

const foodPreferences = ['Veg', 'Non-Veg', 'Drinker', 'Non-Drinker'];

function NewUserScreen() {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const [selected, setSelected] = useState<string | null>(foodPreferences[0]);
  const [isDrinker, setIsDrinker] = useState(false);

  return (
    <View style={baseStyles.layout}>
      <Section
        title="A bit about yourself"
        subtitle="Enter your basic details"
      />
      <Input
        label="Full Name"
        value={name}
        setValue={setName}
        placeholder="John Doe"
      />

      <Dropdown
        label="Food Preference"
        options={foodPreferences}
        value={selected}
        onSelect={val => setSelected(val)}
        placeholder="Choose category"
      />

      <Switch
        label="Drinks alcohol?"
        value={isDrinker}
        setValue={setIsDrinker}
      />

      <BaseButton
        variant="primary"
        onPress={() => navigation.navigate('NewUserPayment')}>
        Proceed
      </BaseButton>
    </View>
  );
}

export default NewUserScreen;
