import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const EyeButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/EYE-BUTTON.png')} style={styles.iconImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 37,
    height: 37,
    resizeMode: 'contain',
  },
});

export default EyeButton; 