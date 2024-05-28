import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import ChatBox from '../ChatBox'

const ChatList = () => {
  const convoData = useSelector((state:RootState) => state.chat.convo)
  const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
  const styles = getStyles(appearanceMode)
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{ paddingTop: 150, paddingBottom: 85 }}
      data={convoData.chats}
      keyExtractor={(chat) => chat.id}
      renderItem={({ item }) => <ChatBox files={item.files} id={item.id} user={item.user} chat={item.chat}/>}
      />
    </KeyboardAvoidingView>
  )
}

export default ChatList
