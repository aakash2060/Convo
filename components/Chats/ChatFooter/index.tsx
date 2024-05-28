import { Dimensions, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Gesture, GestureDetector, TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const initialKeyboardWidth = Dimensions.get('window').width * .5
const ChatFooter = () => {
  const gesture = Gesture.Pan()
  const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
  const styles = getStyles(appearanceMode)
  const [keyboardPaddingBottom, setKeyboardPaddingBottom] = useState(23)
  const [expanded, setExpanded] = useState(false)
  const [textInput, setTextInput] = useState<string>()
  const expansionWidth = useSharedValue(initialKeyboardWidth)

  const keyboardExpansionAnimation = useAnimatedStyle(() => {
    return {
      width: expansionWidth.value
    }
  })
  const handleExpansion = () => {
    setExpanded(true)
    if(textInput) {
      expansionWidth.value = withTiming(Dimensions.get('window').width * .8, {duration: 300})
    } else {
      setExpanded(false)
      expansionWidth.value = withTiming(initialKeyboardWidth, {duration: 300})
    }
  }
  return (
    <GestureDetector gesture={gesture}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}>
        <BlurView intensity={80} style={[styles.container, { paddingBottom: keyboardPaddingBottom }]}>
          <Animated.View style={[styles.inputContainer, keyboardExpansionAnimation]}>
            <TextInput 
              multiline
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
              onKeyPress={handleExpansion}
              onBlur={() => setKeyboardPaddingBottom(23)} 
              onFocus={() => setKeyboardPaddingBottom(5)} 
              style={styles.textInput}  
              placeholder='Type something...'/>
            { expanded && <TouchableOpacity>
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>}
          </Animated.View>
          <View style={styles.middleContainer}>
            { !expanded && <TouchableOpacity style={styles.recordButton}>
              <MaterialCommunityIcons name='microphone' color={'white'} size={24}/>
            </TouchableOpacity>}
          </View>

          <TouchableOpacity>
            <Ionicons name='attach' color={'white'} size={24} />
          </TouchableOpacity>
        </BlurView>
      </KeyboardAvoidingView>
    </GestureDetector>
  )
}

export default ChatFooter

