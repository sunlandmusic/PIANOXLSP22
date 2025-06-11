import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const BLACK_KEYS = ['C#', 'D#', null, 'F#', 'G#', 'A#'];

export default function PianoXL() {
  return (
    <View style={styles.container}>
      {/* Settings Panel */}
      <View style={styles.settingsPanel}>
        {/* Settings content will go here */}
      </View>
      
      {/* Rotated PIANO text and XL button */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>PIANO</Text>
        <Pressable style={styles.xlButton}>
          <Text style={styles.xlButtonText}>XL</Text>
        </Pressable>
      </View>
      {/* White keys row */}
      <View style={styles.whiteKeysRow}>
        {WHITE_KEYS.map((note, i) => (
          <View key={note} style={styles.whiteKey}>
            <Text style={styles.chordNameText}>{note}</Text>
          </View>
        ))}
      </View>
      {/* Black keys row */}
      <View style={styles.blackKeysRow}>
        {BLACK_KEYS.map((note, i) =>
          note ? (
            <View key={note} style={styles.blackKey}>
              <Text style={styles.chordNameText}>{note}</Text>
            </View>
          ) : (
            <View key={i} style={styles.blackKeyPlaceholder} />
          )
        )}
        {/* Fader at the end of black keys row */}
        <View style={styles.faderWrapper}>
          <View style={styles.faderContainer}>
            <View style={styles.faderTrack}>
              <View style={styles.faderHandle} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  settingsPanel: {
    position: 'absolute',
    top: -6,
    right: 0,
    width: 64,
    height: 187,
    backgroundColor: 'transparent',
    zIndex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  titleContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '-90deg' }],
    left: -39,
    top: 78,
    zIndex: 4,
    backgroundColor: 'transparent',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20.4,
    fontWeight: '300',
    textAlign: 'center',
    marginRight: 8,
  },
  xlButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    width: 78,
    height: 47,
    borderRadius: 15,
  },
  xlButtonText: {
    color: '#FFFFFF',
    fontSize: 18.4,
    fontWeight: '400',
  },
  whiteKeysRow: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 800,
    paddingHorizontal: 20,
    left: 4,
    top: 134,
    zIndex: 2,
  },
  blackKeysRow: {
    position: 'absolute',
    top: -7,
    left: 26,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 800,
    zIndex: 3,
  },
  whiteKey: {
    width: 72,
    height: 129,
    backgroundColor: '#4A4A4A',
    marginHorizontal: 13.5,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  blackKey: {
    width: 72,
    height: 129,
    backgroundColor: '#000000',
    marginHorizontal: 13.5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4A4A4A',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  blackKeyPlaceholder: {
    width: 72,
    marginHorizontal: 13.5,
    height: 129,
  },
  chordNameText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
  },
  faderWrapper: {
    height: 92.65,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    top: -20,
  },
  faderContainer: {
    width: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faderTrack: {
    width: 4,
    height: '100%',
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    position: 'relative',
  },
  faderHandle: {
    width: 31,
    height: 9,
    backgroundColor: '#2A2A2A',
    borderRadius: 4.5,
    position: 'absolute',
    left: -15.5,
    top: 40,
    borderWidth: 1,
    borderColor: '#000000',
  },
}); 