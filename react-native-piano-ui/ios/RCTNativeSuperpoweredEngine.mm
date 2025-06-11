//
//  RCTNativeSuperpoweredEngine.mm
//  SuperpoweredPlayerWithEffects
//

#import "RCTNativeSuperpoweredEngine.h"
#import "SuperpoweredEngineExample.h"
#import "SuperpoweredAudio.h"

@interface RCTNativeSuperpoweredEngine()
@property (strong, nonatomic) SuperpoweredAudio *superpowered;
@end

@implementation RCTNativeSuperpoweredEngine {
    SuperpoweredEngineExample *engine;
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(initSuperpowered) {
    engine = new SuperpoweredEngineExample();
}

RCT_EXPORT_METHOD(togglePlayback) {
    engine->togglePlayback();
}

RCT_EXPORT_METHOD(enableFlanger:(BOOL)enable) {
    engine->enableFlanger(enable);
}

RCT_EXPORT_METHOD(loadInstrument:(NSString *)path instrumentName:(NSString *)instrumentName) {
    engine->loadInstrument([path UTF8String], [instrumentName UTF8String]);
}

RCT_EXPORT_METHOD(playNote:(NSString *)instrumentName note:(NSInteger)note) {
    engine->playNote([instrumentName UTF8String], (int)note);
}

RCT_EXPORT_METHOD(stopNote:(NSString *)instrumentName) {
    engine->stopNote([instrumentName UTF8String]);
}

RCT_EXPORT_METHOD(setCurrentInstrument:(NSString *)instrumentName) {
    engine->setCurrentInstrument([instrumentName UTF8String]);
}

- (void)dealloc {
    delete engine;
}

- (id)init {
  if (self = [super init]) {
    _superpowered = [[SuperpoweredAudio alloc] init];
  }
  return self;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeSuperpoweredEngineSpecJSI>(params);
}

@end 