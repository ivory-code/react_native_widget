// import {NativeModules} from 'react-native'
// import {TodoItem} from '../MainPage/types'

// const NativeWidgetDefaults = NativeModules.WidgetDefaults

// const WidgetDefaults = async (obj: TodoItem[]) => {
//   try {
//     const res = await NativeWidgetDefaults.set(JSON.stringify(obj))
//     return res
//   } catch (e) {
//     console.warn('[SHARED DEFAULTS]', e)
//     return false
//   }
// }

// export default WidgetDefaults

import {NativeModules} from 'react-native'

const NativeWidgetDefaults = NativeModules.WidgetDefaults

class WidgetDefaults {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async set(obj: Record<string, any>) {
    try {
      // UserDefaults는 NSString을 받기 때문에 JSON.stringify()하여 Write
      const res: boolean = await NativeWidgetDefaults.set(JSON.stringify(obj))

      return res
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[SHARED DEFAULTS]', e)

      return false
    }
  }
}

export default new WidgetDefaults()
