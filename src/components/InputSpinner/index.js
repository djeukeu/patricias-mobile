import React, { useState } from 'react';

import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

const InputSpinner = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 0,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleDecrement = () => {
    const newValue = Math.max(min, value - step);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, value + step);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const handleChange = (text) => {
    const numericValue = parseInt(text) || 0;
    const boundedValue = Math.min(Math.max(numericValue, min), max);
    setValue(boundedValue);
    onChange && onChange(boundedValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement}>
        <Text style={styles.symbol}>−</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={String(value)}
        keyboardType="numeric"
        onChangeText={handleChange}
      />
      <TouchableOpacity onPress={handleIncrement}>
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputSpinner;
