import { View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import ProfileHeader from './ProfileHeader'
import ProfileFeed from './ProfileFeed'

const Profile = () => {
    const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
    const styles = getStyles(appearanceMode)
    

    return (
        <View style={styles.container}>
            <ProfileHeader />
            <ProfileFeed/>
        </View>
    )
}

export default Profile
