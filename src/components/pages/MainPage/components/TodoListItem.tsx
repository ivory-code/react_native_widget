import {Text, TouchableOpacity, View, useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

interface Props {
  id: number
  isCompleted: boolean
  text: string
  onPress: (id: number) => void
}

const TodoListItem = ({id, isCompleted, text, onPress}: Props) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 12,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: isCompleted ? 'black' : Colors.lighter,
          }}
        />

        <Text
          style={{
            color: isDarkMode ? Colors.white : Colors.black,
            fontSize: 24,
            fontWeight: '600',
            marginLeft: 8,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default TodoListItem
