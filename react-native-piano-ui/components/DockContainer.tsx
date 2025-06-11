import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import EyeButton from './EyeButton';
import PianoXL from './PianoXL';
import SettingsPanelXL from './SettingsPanelXL';
import PlusMinusBar from './PlusMinusBar';

const DockContainer: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const handlePlus = () => {
    console.log('Plus pressed');
  };

  const handleMinus = () => {
    console.log('Minus pressed');
  };

  if (!isLandscape) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}> 
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Please rotate your device to landscape.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* EyeButton (BROWN, slot1) */}
      <View style={styles.slot1Container}>
        <EyeButton />
      </View>
      {/* PianoXL (BLUE, slot2) */}
      <View style={styles.slot2Container}>
        <PianoXL />
      </View>
      {/* SettingsPanelXL (GREEN, slot3) */}
      <View style={styles.slot3Container}>
        <SettingsPanelXL />
      </View>
      {/* PlusMinusBar */}
      <View style={styles.plusMinusContainer}>
        <PlusMinusBar onPlus={handlePlus} onMinus={handleMinus} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  slot1Container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 64,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // BLACK
    zIndex: 10,
  },
  slot2Container: {
    position: 'absolute',
    top: 86,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#191970', // BLUE
    borderRadius: 12,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slot3Container: {
    position: 'absolute',
    top: 0,
    left: 64,
    right: 64,
    height: 80,
    backgroundColor: '#000', // BLACK
    borderRadius: 12,
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusMinusContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 64,
    backgroundColor: '#000',
    zIndex: 5,
  },
});

export default DockContainer; 