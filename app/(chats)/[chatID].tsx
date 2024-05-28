import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Profile from '@/components/Profile'
import users from '@/assets/data/users'
import Chats from '@/components/Chats'

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Chats/>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})