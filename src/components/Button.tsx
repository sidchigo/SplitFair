import {JSX} from 'react';
import {StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  baseButton: {
    padding: 16,
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
  return <Button title={children} />;
}
