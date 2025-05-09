import {JSX} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const styles = StyleSheet.create({
  baseButton: {
    padding: 16,
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
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
  },
  secondaryButtonText: {
    color: '#121212',
  },
});

type BaseButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: string;
  onPress?: () => void;
};

export default function BaseButton({
  variant,
  children,
  onPress,
}: BaseButtonProps): JSX.Element {
  const variantStyles = (type = '') => {
    switch (variant) {
      case 'primary':
        return type === 'text' ? styles.buttonText : styles.primaryButton;
      case 'secondary':
        return type === 'text'
          ? styles.secondaryButtonText
          : styles.secondaryButton;
      default:
        return type === '' ? {} : styles.baseButton;
    }
  };
  return (
    <Pressable style={[styles.baseButton, variantStyles()]} onPress={onPress}>
      <Text style={[styles.buttonText, variantStyles('text')]}>{children}</Text>
      {/* </Animated.View> */}
    </Pressable>
  );
}
