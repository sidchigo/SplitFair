import {JSX} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  mainTitle: {
    fontSize: 36,
    fontFamily: 'InterBold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    color: '#6C7278',
  },
});

type SectionProps = {
  title: string;
  subtitle: string;
};

export default function Section({title, subtitle}: SectionProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
