#ifndef SAMPLE_PLAYER_HPP
#define SAMPLE_PLAYER_HPP

#include "SuperpoweredSimple.h"
#include "SuperpoweredAdvancedAudioPlayer.h"
#include "SuperpoweredFilter.h"
#include "SuperpoweredReverb.h"
#include <string>
#include <map>

class SamplePlayer {
public:
    unsigned int sampleId;
    SuperpoweredAdvancedAudioPlayer *player;
    SuperpoweredFilter *hpf;
    SuperpoweredFilter *lpf;
    SuperpoweredReverb *reverb;
    float pitchCents;
    float attackMs, decayMs, sustainLevel, releaseMs;
    float hpfFreq, hpfResonance, lpfFreq, lpfResonance;
    bool reverbEnabled;
    float reverbMix, reverbRoomSize, reverbDecay, reverbPredelay, reverbDamping;

    SamplePlayer(unsigned int id);
    ~SamplePlayer();

    bool loadSample(const char *path);
    void start();
    void stop();
    void unload();

    void setPitch(float cents);
    void setEnvelope(float attack, float decay, float sustain, float release);
    void setFilters(float hpfFreq, float hpfRes, float lpfFreq, float lpfRes);
    void setReverb(bool enabled, float mix, float roomSize, float decay, float predelay, float damping);
    void resetDefaults();
    std::map<std::string, float> getAllParameters();
};

#endif 