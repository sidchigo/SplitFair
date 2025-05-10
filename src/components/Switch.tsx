import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Animated, Text} from 'react-native';
import colors from '../styles/colors';
import {inputStyles} from './Input';

const CONTAINER_WIDTH = 40;
const CIRCLE_SIZE = 20;
const PADDING = 2;

type SwitchProps = {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    height: CIRCLE_SIZE + PADDING * 2,
    borderRadius: (CIRCLE_SIZE + PADDING * 2) / 2,
    padding: PADDING,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'white',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const Switch = ({label, value, setValue}: SwitchProps) => {
  const [animation] = useState(new Animated.Value(value ? 1 : 0));

  const toggleSwitch = () => {
    Animated.timing(animation, {
      toValue: value ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setValue(!value);
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, CONTAINER_WIDTH - CIRCLE_SIZE - PADDING * 2],
  });

  return (
    <View style={styles.switchContainer}>
      <Text style={inputStyles.subtitle}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toggleSwitch}
        style={[
          styles.container,
          {backgroundColor: value ? colors.purple : colors.gray},
        ]}>
        <Animated.View style={[styles.circle, {transform: [{translateX}]}]} />
      </TouchableOpacity>
    </View>
  );
};

export default Switch;
