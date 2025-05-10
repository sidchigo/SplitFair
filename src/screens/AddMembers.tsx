import {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  PermissionsAndroid,
} from 'react-native';
import baseStyles from '../styles/baseStyles';
import {inputStyles} from '../components/Input';

const {ContactsModule} = NativeModules;

const styles = StyleSheet.create({
  groupSection: {
    paddingHorizontal: 16,
    width: '100%',
  },
});

function AddMembersScreen() {
  useEffect(() => {
    const fetchContacts = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        try {
          const contacts = await ContactsModule.getContacts();
          console.log(contacts);
          // contacts: [{ name, number, photo }]
        } catch (e) {
          console.error('Error getting contacts', e);
        }
      } else {
        console.warn('Permission denied');
      }
    };
    fetchContacts();
  }, []);

  return (
    <View style={[baseStyles.layout, {marginTop: 20}]}>
      <View>
        <Text style={inputStyles.subtitle}>Member in Group 1</Text>
        <Text style={inputStyles.subtitle}>
          remove member from the list, if not part of the bill
        </Text>
      </View>

      {/* <BaseButton variant="primary" onPress={() => navigation.navigate('OTP')}>
        Create Group
      </BaseButton> */}
    </View>
  );
}

export default AddMembersScreen;
