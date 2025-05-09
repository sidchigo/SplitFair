import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import Divider from '../components/Divider';
import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';
// import DropdownMenu, {MenuOption} from '../components/DropDown';
import Dropdown from '../components/DropDown';
import Switch from '../components/Switch';

const styles = StyleSheet.create({
  triggerStyle: {
    // height: 40,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  triggerText: {
    fontSize: 16,
  },
});

const foodPreferences = ['Veg', 'Non-Veg', 'Drinker', 'Non-Drinker'];

function NewUserScreen() {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const [selected, setSelected] = useState<string | null>(foodPreferences[0]);
  const [isDrinker, setIsDrinker] = useState(false);

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

      <BaseButton variant="primary" onPress={() => navigation.navigate('OTP')}>
        Proceed
      </BaseButton>
    </View>
  );
}

export default NewUserScreen;
