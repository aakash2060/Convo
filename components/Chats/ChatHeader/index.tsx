import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { BlurView } from 'expo-blur'
import getStyles from './styles'
import { Entypo, Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { getUserData } from '@/state/features/userSlice'

const ChatHeader = () => {
  const gesture = Gesture.Pan()
  const convoData = useSelector((state:RootState) => state.chat.convo)
  const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
  const dispatch = useDispatch()
  const styles = getStyles(appearanceMode)
  const router = useRouter()

  const handleBackButton = () => {
    router.back()
  }

  const handleProfileNavigation = () => {
    dispatch(getUserData(convoData.user))
    router.push({
      pathname: '/profile/[profileID]',
      params: {
        profileID: convoData.user.id
      }
    })
  }
  
  return (
    <GestureDetector gesture={gesture}>
      <BlurView intensity={40} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleProfileNavigation} style={styles.usernameContainer}>
            <Image source={{ uri: convoData.user.profileImage }} style={styles.profileImage}/>
            <Text style={styles.username}>{ convoData.user.username }</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={handleBackButton}>
            <Entypo name="chevron-left" size={26} color="white" />
          </TouchableOpacity>

          <View style={styles.convoStartContainer}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.footerText}>{convoData.convoStarter}</Text>
          </View>

          <TouchableOpacity>
            <Feather name="more-vertical" size={26} color="white" />
          </TouchableOpacity>
        </View>
    
      </BlurView>
    </GestureDetector>
   
  )
}

export default ChatHeader

