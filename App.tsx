import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'

const App = (): React.JSX.Element => {
  return (
    <View>
      <Text>App</Text>
      <View>
        {ProfileScreen()}
      </View>
    </View>
  )
}

export default App