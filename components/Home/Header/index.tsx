import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { userType } from '@/types'
import { BlurView } from 'expo-blur'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { getStyles } from './styles'
import { router } from 'expo-router'
import { getUserData } from '@/state/features/userSlice'


const Header = (user: userType) => {
    const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
    const authenticatedUserData = useSelector((state: RootState) => state.user.authenticatedUserData)
    const styles = getStyles(appearanceMode)
    const userId = user.id
    const dispatch = useDispatch()

    const handleNavigation = () => {
        dispatch(getUserData(authenticatedUserData))
        router.push({
            pathname: '/profile/[profileID]',
            params: {
                profileID: String(userId)
            }
        })
    }
    
    return (
        <BlurView intensity={appearanceMode.name === 'light' ? 0 : 40} style={styles.headerContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.icon}>🗣️</Text>
                <TouchableOpacity onPress={handleNavigation}>
                    <Image source={{ uri: user.profileImage }} style={styles.profileImage}/>
                </TouchableOpacity>
            </View>
        </BlurView>
    )
}

export default Header

