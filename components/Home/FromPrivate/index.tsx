import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getStyles } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { userType } from '@/types'

const FromPrivate = (user: userType) => {
    const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
    const styles = getStyles(appearanceMode)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header}>
                <Image source={{ uri: user.profileImage }} style={styles.profileImage}/>
                <Text style={styles.name}>{user.name}</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                { Array.isArray(user.convos) && user.convos.length > 0 && <Text style={styles.convoStarter}>{user.convos[user.convos.length === 1 ? 0 : user.convos.length - 1]?.convoStarter}</Text>}
                <TouchableOpacity style={styles.viewRoomButton}>
                    <Text style={styles.viewRoomText}>View Room</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FromPrivate

