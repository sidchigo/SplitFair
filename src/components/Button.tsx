import {JSX} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const styles = StyleSheet.create({
  baseButton: {
    padding: 16,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'InterMedium',
  },
  primaryButton: {
    backgroundColor: '#121212',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#121212',
  },
});

type BaseButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: string;
};

export default function BaseButton({
  variant,
  children,
}: BaseButtonProps): JSX.Element {
  const variantStyles = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      default:
        return styles.baseButton;
    }
  };
  return (
    <Pressable style={[styles.baseButton, variantStyles()]}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}
