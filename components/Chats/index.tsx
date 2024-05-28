import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ChatHeader from './ChatHeader'
import { Text, ScrollView } from 'react-native'
import ChatFooter from './ChatFooter'
import ChatList from './ChatList'

const Chats = () => {
  return (
    <GestureHandlerRootView>
      <ChatHeader/>
      <ChatList/>
      <ChatFooter/>
    </GestureHandlerRootView>
  )
}

export default Chats

