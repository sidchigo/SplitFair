import {JSX} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
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
  input: {
    width: '100%',
    height: 48,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 8,
  },
});

type InputProps = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input({
  label,
  value,
  setValue,
}: InputProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number"
        placeholderTextColor="#B0B3B8"
        value={value}
        maxLength={10}
        inputMode="numeric"
        keyboardType="number-pad"
        onChangeText={setValue}
      />
    </View>
  );
}
