import {type ReactElement, useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import WidgetDefaults from '../widget'
import TodoListItem from './components/TodoListItem'
import {type TodoItem} from './types'

const MainPage = (): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingTop: 40,
    flex: 1,
  }

  const [todoItem, setTodoItem] = useState<TodoItem[]>([
    {
      id: 1,
      text: 'First Todo',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Second Todo',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Third Todo',
      isCompleted: false,
    },
    {
      id: 4,
      text: 'Fourth Todo',
      isCompleted: false,
    },
  ])

  const handlePress = (id: number) => {
    setTodoItem(prev =>
      prev.map(i => (i.id === id ? {...i, isCompleted: !i.isCompleted} : i)),
    )
  }

  useEffect(() => {
    void WidgetDefaults.set(todoItem)
  }, [todoItem])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {todoItem.map(t => (
          <TodoListItem key={t.id} {...t} onPress={handlePress} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MainPage
