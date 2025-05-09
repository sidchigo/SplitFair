// Dropdown.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {inputStyles} from './Input';
import colors from '../styles/colors';

type DropdownProps = {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
};

const styles = StyleSheet.create({
  trigger: {
    ...inputStyles.input,
    padding: 12,
    backgroundColor: '#fff',
  },
  triggerText: {
    fontSize: 16,
    color: '#333',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    maxHeight: 250,
    elevation: 5,
  },
  option: {
    padding: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: '100%',
  },
});

const Dropdown: React.FC<DropdownProps> = ({label, value, setValue}) => {
  return (
    <Pressable onPress={setValue}>
      <View>
        <View></View>
      </View>
    </Pressable>
  );
};

export default Dropdown;
