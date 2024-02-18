import {
  type StyleProp,
  Text,
  type TextStyle,
  TouchableOpacity,
  View,
  type ViewStyle,
  useColorScheme,
} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

interface Props {
  id: number
  isCompleted: boolean
  text: string
  onPress: (id: number) => void
}

const TodoListItem = ({id, isCompleted, text, onPress}: Props) => {
  const isDarkMode = useColorScheme() === 'dark'

  const containerStyle: StyleProp<ViewStyle> = {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }

  const textContainerStyle: StyleProp<ViewStyle> = {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: isCompleted ? 'black' : Colors.lighter,
  }

  const textStyle: StyleProp<TextStyle> = {
    color: isDarkMode ? Colors.white : Colors.black,
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 8,
  }

  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <View style={containerStyle}>
        <View style={textContainerStyle} />
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TodoListItem
