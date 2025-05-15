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
  options: string[];
  value: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
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

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onSelect,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  const formattedOptions = options.map(
    option => option[0].toUpperCase() + option.slice(1),
  );

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.subtitle}>{label}</Text>
      <Pressable style={styles.trigger} onPress={() => setIsOpen(true)}>
        <Text style={styles.triggerText}>{value || placeholder}</Text>
      </Pressable>

      <Modal visible={isOpen} transparent animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setIsOpen(false)}>
          <View style={styles.dropdown}>
            <FlatList
              data={formattedOptions}
              keyExtractor={item => item}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Dropdown;
