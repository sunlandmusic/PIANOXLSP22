#import <React/RCTBridgeModule.h>

@interface RCTNativeSuperpoweredEngine : NSObject <RCTBridgeModule>

- (void)initSuperpowered;
- (void)togglePlayback;
- (void)enableFlanger:(BOOL)enable;
- (void)loadInstrument:(NSString *)path instrumentName:(NSString *)instrumentName;
- (void)playNote:(NSString *)instrumentName note:(NSInteger)note;
- (void)stopNote:(NSString *)instrumentName;
- (void)setCurrentInstrument:(NSString *)instrumentName;

@end 