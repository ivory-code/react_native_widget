import type {ReactElement} from 'react'
import {SafeAreaView, ScrollView, View, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import MainPage from '@components/pages/MainPage'

const App = (): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <MainPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
