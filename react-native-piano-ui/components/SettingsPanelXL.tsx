import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
// Use lucide-react-native icons if available
import { Image as ImageIcon, Ban as BanIcon } from 'lucide-react-native';

const SettingsPanelXL: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* All other controls in a single flex row */}
      <View style={styles.row}>
        {/* Skin/Image Picker Button */}
        <Pressable style={styles.iconCircleButton}>
          <Image source={require('../assets/IMAGE-BUTTON.png')} style={styles.iconImage} />
        </Pressable>
        {/* A Button */}
        <Pressable style={styles.abButton}>
          <Text style={styles.abButtonText}>A</Text>
        </Pressable>
        {/* Disable Button */}
        <Pressable style={styles.abButton}>
          <Image source={require('../assets/DISABLE-BUTTON.png')} style={styles.disableIconImage} />
        </Pressable>
        <Pressable style={styles.bassClefButton}>
          <Text style={styles.bassClefButtonText}>𝄢</Text>
        </Pressable>
        <Pressable style={styles.soundWindow}>
          <Text style={styles.soundText}>BALAFON</Text>
        </Pressable>
        <View style={styles.settingsPanel}>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>KEY</Text>
            <Text style={styles.settingValue}>A#</Text>
          </View>
          <View style={[styles.settingItem, styles.modeSettingItem]}>
            <Text style={styles.settingLabel}>MODE</Text>
            <View style={styles.modeValueContainer}>
              <Text style={styles.settingValue}>FREE</Text>
            </View>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>OCT</Text>
            <Text style={styles.settingValue}>0</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>INV</Text>
            <Text style={styles.settingValue}>0</Text>
          </View>
          <View style={styles.chordDisplay}>
            <Text style={styles.chordLabel}>CHORD</Text>
            <Text style={styles.chordValue}>Cmaj7</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 100,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
    height: 100,
  },
  iconCircleButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 8,
  },
  iconImage: {
    width: 41,
    height: 41,
    resizeMode: 'contain',
  },
  abButton: {
    width: 32,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    marginLeft: 0,
    marginRight: 8,
  },
  abButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  soundWindow: {
    width: 132,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  soundText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  settingsPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
    height: 67,
  },
  settingItem: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: 'transparent',
    width: 58,
    marginRight: 2,
  },
  modeSettingItem: {
    width: 102,
    minWidth: 0,
    padding: 2,
    margin: 0,
    height: 67,
    marginRight: 2,
  },
  settingLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13.8,
    fontWeight: '400',
    marginBottom: 2,
  },
  settingValue: {
    color: '#fff',
    fontSize: 18.4,
    fontWeight: '400',
  },
  chordDisplay: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 67,
    justifyContent: 'center',
    width: 102,
  },
  chordLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13.8,
    fontWeight: '400',
    marginBottom: 2,
  },
  chordValue: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center',
  },
  modeValueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    margin: 0,
    width: '100%',
  },
  bassClefButton: {
    width: 29,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,0.2)',
    marginLeft: 8,
  },
  bassClefButtonText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 6,
  },
  disableIconImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default SettingsPanelXL; 