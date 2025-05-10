import {JSX} from 'react';
import {
  InputModeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import colors from '../styles/colors';

export const inputStyles = StyleSheet.create({
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
    borderColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 8,
  },
});

type InputProps = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  mode?: InputModeOptions;
  maxLength?: number;
};

export default function Input({
  label,
  value,
  setValue,
  placeholder = '',
  mode = 'text',
  maxLength = 10,
}: InputProps): JSX.Element {
  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.subtitle}>{label}</Text>
      <TextInput
        style={inputStyles.input}
        placeholder={placeholder}
        placeholderTextColor="#B0B3B8"
        value={value}
        maxLength={maxLength}
        inputMode={mode}
        keyboardType={mode === 'text' ? 'decimal-pad' : 'number-pad'}
        onChangeText={setValue}
      />
    </View>
  );
}
