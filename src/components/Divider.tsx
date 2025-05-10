import {JSX} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  grayText: {
    textTransform: 'capitalize',
    color: colors.gray,
  },
  lineBefore: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: '50%',
  },
  lineAfter: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: '50%',
  },
  fullLine: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default function Divider({type = ''}: {type?: string}): JSX.Element {
  if (type === 'line') {
    return <View style={styles.fullLine} />;
  }
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.lineBefore} />
      <Text style={styles.grayText}>or</Text>
      <View style={styles.lineAfter} />
    </View>
  );
}
