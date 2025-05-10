import {StyleSheet, Text, View} from 'react-native';
import baseStyles from '../styles/baseStyles';
import Divider from '../components/Divider';
import {Search} from 'react-native-feather';
import {Card} from '../components/Card';
import {inputStyles} from '../components/Input';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  groupSection: {
    paddingHorizontal: 16,
    width: '100%',
  },
});

function SelectGroupScreen() {
  const navigation = useNavigation();
  return (
    <View style={[baseStyles.layout, {marginTop: 20, paddingHorizontal: 0}]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 16,
        }}>
        <View>
          <Text>Select Members or Group</Text>
          <Text style={inputStyles.subtitle}>3 Groups</Text>
        </View>
        <Search />
      </View>

      <Divider type="line" />
      <View style={styles.groupSection}>
        <Card
          memberCount={3}
          type="group"
          groupName="Group 1"
          showDetails={false}
          onPress={() => navigation.navigate('AddMembers')}
        />
        <Card
          memberCount={7}
          type="group"
          groupName="Group 2"
          showDetails={false}
          onPress={() => navigation.navigate('AddMembers')}
        />
        <Card
          memberCount={5}
          type="group"
          groupName="Group 3"
          showDetails={false}
          onPress={() => navigation.navigate('AddMembers')}
        />
      </View>

      {/* <BaseButton variant="primary" onPress={() => navigation.navigate('OTP')}>
        Create Group
      </BaseButton> */}
    </View>
  );
}

export default SelectGroupScreen;
