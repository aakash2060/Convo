import { StyleSheet, View } from 'react-native'
import React from 'react'
import Profile from '@/components/Profile'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Profile/>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})