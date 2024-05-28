import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { userType } from '@/types'
import { Entypo, Feather } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import { useRouter } from 'expo-router'

const ProfileHeader = () => {
    const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
    const userData = useSelector((state:RootState) => state.user.authenticatedUserData)
    const styles = getStyles(appearanceMode)
    const router = useRouter()

    const handleBackButton = () => {
        router.back()
    }

    const renderHeader = () => {
        if(appearanceMode.name === 'light' || Platform.OS === 'android') {
            
        }
    }

    return (
        <BlurView intensity={40} style={styles.container}>
            <TouchableOpacity onPress={handleBackButton}>
                <Entypo name="chevron-left" size={26} color="white" />
            </TouchableOpacity>

            <Text style={styles.name}>{userData.name}</Text>

            <TouchableOpacity>
                <Feather name="more-vertical" size={26} color="white" />
            </TouchableOpacity>
        </BlurView>
    )
}

export default ProfileHeader

