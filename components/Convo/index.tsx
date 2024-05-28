import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { memo, useState } from 'react'
import { convoType } from '@/types'
import { AntDesign, Feather, FontAwesome6 } from '@expo/vector-icons'
import { getStyles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import ExternalInputBox from '../ExternalInputBox'
import { getUserData } from '@/state/features/userSlice'
import { useRootNavigationState, useRouter } from 'expo-router'
import { getConvoForChat } from '@/state/features/chatSlice'
import { NavigationState } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { BlurView } from 'expo-blur'
const Convo = memo((convo: convoType) => {
    const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
    const router = useRouter()
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const styles = getStyles(appearanceMode)
    const navigationState = useRootNavigationState() as any
    const widthValue = useSharedValue(0)
    const paddingValuePopup = useSharedValue(0)
    const opacityValue = useSharedValue(0)
    const [optionsVisible, setOptionsVisible] = useState(false)
    const currentRoute = navigationState.routes[navigationState.index].name ?? undefined;

    const handleGuestProfile = () => {
    if(currentRoute === 'profile/[profileID]') {
        return;
    }
        dispatch(getUserData(convo.user))
        if(convo.user) {
            router.push({
                pathname: '/profile/[profileID]/',
                params: {
                    profileID: Number(convo.user.id)
                }
            })
        } else return;
    }

    const handleChatNavigation = () => {
        dispatch(getConvoForChat(convo))
        
        router.push({
            pathname: '/(chats)/[chatID]',
            params: {
                chatID: Number(convo.id)
            }
        })
    }

    const animatedPopupStyles = useAnimatedStyle(() => {
        return {
            width: widthValue.value,
            padding: paddingValuePopup.value,
            opacity: opacityValue.value,
        }
    })

    const toggleOptionsVisibility = () => {
        setOptionsVisible(!optionsVisible)
        if(optionsVisible) {
            widthValue.value = withTiming(120)
            paddingValuePopup.value = withTiming(10)
            opacityValue.value = withTiming(1)
        } else {
            widthValue.value = withTiming(0)
            paddingValuePopup.value = withTiming(0)
            opacityValue.value = withTiming(0)
        }
    }


    return (
        <View key={Number(convo.id)} style={styles.container}>
            <Animated.View style={[styles.popUpContainer, animatedPopupStyles]}>
                <View>
                    <TouchableOpacity onPress={toggleOptionsVisibility} style={{ alignItems: 'flex-end' }}>
                        <AntDesign size={24} color={'white'} name='close'/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.popUpOptionButton}>
                    <Text style={styles.popUpOptionText}>Keep Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.popUpOptionButton}>
                    <Text style={styles.popUpOptionText}>Block User</Text>
                </TouchableOpacity>

                
            </Animated.View>

            <View style={styles.header}>
                <TouchableOpacity onPress={handleGuestProfile} style={styles.headerLeft}>
                    { convo.user && <Image style={styles.userImage} source={{uri: convo.user.profileImage}}/>}
                    { convo.user && <Text style={styles.username}>{ convo.user.username }</Text>}
                </TouchableOpacity>
                
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={toggleOptionsVisibility}>
                        <Feather size={20} color={appearanceMode.textColor} name='more-vertical'/>
                    </TouchableOpacity>
                </View>
            </View>


                <View style={styles.contentContainer}>

                    <TouchableOpacity onPress={handleChatNavigation}>
                        <Text style={styles.convoStarter}>{convo.convoStarter}</Text>
                    </TouchableOpacity>

                    {convo.images && convo.images.length > 1 && <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScrollView}>
                        {convo.images?.map((image, index) => (
                            <Image key={index} style={styles.image} source={{uri: image}}/>
                        ))}
                    </ScrollView>}
                    {convo.images && convo.images.length === 1 && <View style={styles.contentContainer}><Image style={styles.image} source={{uri: convo.images[0]}}/></View>}
                    <TouchableOpacity onPress={handleChatNavigation}>
                        <Text style={styles.lastMessage}><Text style={styles.lastMessageUsername}>{convo.chats && convo.chats[convo.chats.length - 1]?.user.username }: </Text>{convo.chats && convo.chats[convo.chats.length - 1]?.chat}</Text>
                    </TouchableOpacity>
                    <ExternalInputBox placeholder={'Send a chat...'} icon={<FontAwesome6 name={"arrow-right-long"} color={'white'} size={14}/>} inputValue={input} onChangeValue={(value) => setInput(value)} action={() => {}}/>
                </View>

            <View style={styles.footer}>
                <Text style={styles.time}>2 Days Ago</Text>
                <Text style={styles.active}>{Number(convo.activeInRoom)} active</Text>
            </View>
        </View>
  )
})

export default Convo

const styles = StyleSheet.create({})