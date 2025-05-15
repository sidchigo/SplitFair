import React, {useEffect, useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {
  collection,
  getDocs,
  getFirestore,
} from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

import Section from '../components/Section';
import Input from '../components/Input';
import BaseButton from '../components/Button';
import Dropdown from '../components/DropDown';
import Switch from '../components/Switch';
import baseStyles from '../styles/baseStyles';

export const db = getFirestore();

// const getUsers = async () => {
//   console.log('users:');
//   try {
//     const users = await getDocs(collection(db, 'users'));
//     console.log(
//       'users: ',
//       users.docs.map(doc => doc.data()),
//     );
//   } catch (error) {
//     console.log('Error getting users: ', error);
//   }
// };

function NewUserScreen() {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const [foodTypes, setFoodTypes] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isDrinker, setIsDrinker] = useState(false);

  useEffect(() => {
    const getFoodTypes = async () => {
      try {
        const constants = await getDocs(collection(db, 'constants'));
        setFoodTypes(constants.docs.map(doc => doc.data())[0].foodTypes);
      } catch (error) {
        console.log('Error getting users: ', error);
      }
    };
    getFoodTypes();
  }, []);

  const handleProceed = async () => {
    if (!name || !selected) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
      return;
    }
    const payload = {
      name,
      foodType: selected,
      isDrinker,
    };
    try {
      // TODO: get user id from auth
      await collection(db, 'users').doc().set(payload);
      navigation.navigate('NewUserPayment');
    } catch (error) {
      ToastAndroid.show('User not created', ToastAndroid.SHORT);
    }
  };

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
        options={foodTypes}
        value={selected}
        onSelect={val => setSelected(val)}
        placeholder="Choose category"
      />

      <Switch
        label="Drinks alcohol?"
        value={isDrinker}
        setValue={setIsDrinker}
      />

      <BaseButton variant="primary" onPress={handleProceed}>
        Proceed
      </BaseButton>
    </View>
  );
}

export default NewUserScreen;
