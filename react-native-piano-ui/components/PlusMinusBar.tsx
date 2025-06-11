import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../constants/colors';

interface PlusMinusBarProps {
  onPlus: () => void;
  onMinus: () => void;
}

const PlusMinusBar: React.FC<PlusMinusBarProps> = ({ onPlus, onMinus }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.plusButton} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Pressable style={styles.minusButton} onPress={onMinus}>
        <Text style={styles.buttonText}>−</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 40,
    justifyContent: 'center',
  },
  plusButton: {
    width: 40,
    height: 140,
    borderRadius: 8,
    backgroundColor: colors.buttonGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  minusButton: {
    width: 40,
    height: 140,
    borderRadius: 8,
    backgroundColor: colors.buttonGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.textOffWhite,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default PlusMinusBar; 