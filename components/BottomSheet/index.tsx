import { Text, View, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native'
import getStyles from './styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { BlurView } from 'expo-blur'
import Animated, { SlideInDown, BounceOut } from 'react-native-reanimated'
import { toggleConvoStarterButton } from '@/state/features/navigationSlice'
import { Octicons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const BottomSheet = () => {
    const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
    const convoStarterState = useSelector((state: RootState) => state.navigation.convoStarter)
    const convoStartFiles = useSelector((state:RootState) => state.startConvo.file)
    const height = convoStartFiles.length > 0 ? Dimensions.get('window').height * 0.9 : Dimensions.get('window').height * 0.5
    const styles = getStyles(appearanceMode, height)
    const dispatch = useDispatch()



    return (
        <BlurView intensity={40} style={styles.backgroundContainer}>
            <TouchableOpacity onPress={() => dispatch(toggleConvoStarterButton())} style={styles.close}/>
            { convoStarterState && 
            <Animated.View entering={SlideInDown} exiting={BounceOut.duration(1000)} style={[styles.bottomSheetContainer]}>
                {/* <View style={styles.bottomSheetHeader} /> */}
                <KeyboardAwareScrollView>

                <View style={styles.header}>
                    <View style={styles.headerInfoContainer}>
                        <Text style={styles.headerText}>What's on your mind today?</Text>
                        <TouchableOpacity onPress={() => dispatch(toggleConvoStarterButton())}>
                            <Text style={styles.headerText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.locationInputContainer}>
                        <Octicons name='location' color={appearanceMode.faint} size={20}/>
                        <TextInput style={styles.locationInput} placeholderTextColor={appearanceMode.faint} placeholder='Location'/>
                    </View>

                    <View style={styles.mainContainer}>
                        <TouchableOpacity style={styles.recordButton}>
                            <Image source={require('../../assets/images/record.png')} style={styles.iconImage}/>
                            <Text style={styles.recordText}>Record</Text>
                        </TouchableOpacity>

                        <TextInput style={styles.mainInput} placeholder='Type Something...'/>
                    </View>

                    <View style={styles.mediaContainer}>
                        <View style={styles.mediaLeft}>
                            <TouchableOpacity>
                                {appearanceMode.name === 'light' &&<Image style={styles.iconImage} source={require('../../assets/images/imagelightmode.png')}/>}
                                {appearanceMode.name === 'dark' &&<Image style={styles.iconImage} source={require('../../assets/images/imagedarkmode.png')}/>}
                            </TouchableOpacity>

                            <TouchableOpacity>
                                {appearanceMode.name === 'light' &&<Image style={styles.iconImage} source={require('../../assets/images/videolightmode.png')}/>}
                                {appearanceMode.name === 'dark' &&<Image style={styles.iconImage} source={require('../../assets/images/videodarkmode.png')}/>}
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <Text style={styles.startConvoText}>Start Convo</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                        {convoStartFiles.map((file, index) => (
                            <Image source={{uri: file}} key={index} style={styles.image}/>
                        ))}
                    </ScrollView>
                </View>
                </KeyboardAwareScrollView>

            </Animated.View>}
        </BlurView>
    )
} 

export default BottomSheet

