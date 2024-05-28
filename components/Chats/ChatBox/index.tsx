import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { chatType } from '@/types'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

const ChatBox = ({ id, user, chat, files }:chatType) => {
  const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
  const styles = getStyles(appearanceMode)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft}>
          <Image source={{ uri: user?.profileImage }} style={styles.profileImage}/>
          <Text style={styles.username}>{user?.username}</Text>
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity>
              <Feather name='volume-2' size={24} color={'gray'}/>
          </TouchableOpacity>

          <TouchableOpacity>
                <Feather name="more-vertical" size={26} color={'gray'} />
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        { files?.length === 1 && <View style={styles.mediaContainerView}>
          <Image style={[styles.chatMedia, { width: '100%', marginBottom: 10 }]} source={{ uri: files[0] }} key={files[0]}/>
        </View>}
        {  files?.length && files?.length > 1 &&<ScrollView showsHorizontalScrollIndicator={false} style={{ borderRadius: 10, marginBottom: 10 }} horizontal>
          {
            files?.map((file, index) => (
              <Image style={styles.chatMedia} source={{ uri: file }} key={index}/>
            ))
          }
        </ScrollView>}
        
        <Text style={styles.chat}>{chat}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>12:46</Text>
      </View>

    </View>
  )
}

export default ChatBox

