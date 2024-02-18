//
//  WidgetDefaults.m
//  react_native_widget
//
//  Created by khs on 2/18/24.
//

#import <Foundation/Foundation.h>
#import "WidgetDefaults.h"

@implementation WidgetDefaults

-(dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE(WidgetDefaults);

RCT_EXPORT_METHOD(set:(NSString *)data
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  @try{
    NSUserDefaults *shared = [[NSUserDefaults alloc]initWithSuiteName:@"group.react.native.widget.example"]; //App Group명
    [shared setObject:data forKey:@"data"]; // data를 저장할 key 값
    [shared synchronize];
    resolve(@"true");
  }@catch(NSException *exception){
    reject(@"get_error",exception.reason, nil);
  }

}

@end
