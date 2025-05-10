import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import baseStyles from '../styles/baseStyles';
import BaseButton from '../components/Button';
import {Card} from '../components/Card';
import {inputStyles} from '../components/Input';

type RootStackParamList = {
  Login: undefined;
};

const styles = StyleSheet.create({
  container: {
    ...baseStyles.layout,
    flex: 1,
    gap: 4,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  scrollContent: {
    marginTop: 10,
    paddingBottom: 125, // Adjusted to accommodate the footer
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0, // Ensure the footer starts at the left edge
    right: 0, // Ensure the footer ends at the right edge
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject, // Ensure the BlurView covers the entire footer
    zIndex: 0, // Place it behind the button
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    width: '100%',
  },
});

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require('../assets/images/logo.png')} />
          <Image source={require('../assets/images/avatar.png')} />
        </View>

        <Text style={inputStyles.subtitle}>Pending Payments</Text>
        <Card
          type="bill"
          amount={100}
          currency="Rs"
          title="Dinner Bill"
          groupName="Griffinix"
        />
        <Card
          type="bill"
          amount={1200}
          currency="Rs"
          title="Lunch Bill"
          groupName="Group 2"
        />

        <Text style={inputStyles.subtitle}>Group List</Text>
        <Card
          type="group"
          amount={100}
          currency="Rs"
          title="Dinner Bill"
          groupName="Griffinix"
          memberCount={5}
          totalBillCount={10}
          pendingBillCount={2}
          settledBillCount={8}
        />
        <Card
          type="group"
          amount={1200}
          currency="Rs"
          title="Lunch Bill"
          groupName="Group 2"
          memberCount={7}
          totalBillCount={12}
          pendingBillCount={5}
          settledBillCount={7}
        />
      </ScrollView>

      <View style={styles.footer}>
        {/* Add the BlurView */}
        <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.buttonWrapper}>
          <BaseButton variant="primary">Create New Bill</BaseButton>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
