import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { appearanceStateType } from '@/state/features/appearanceSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import SearchHeader from './SearchHeader'
import ProfileCard from '../Profile/ProfileCard'
import users from '@/assets/data/users'

const Search = () => {
    const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
    const styles = getStyles(appearanceMode)
    const userData = users
    userData.length = 3
    return (
        <View style={styles.container}>
            <SearchHeader/>
            <ScrollView contentContainerStyle={{ paddingTop: 120 }}>
                <Text style={styles.text}>Explore Users</Text>
                <View style={styles.usercardContainer}>
                    {
                        userData.map((user, index) => (
                            <ProfileCard key={Number(user.id)} id={user.id} username={user.username} name={user.name} profileImage={user.profileImage}/>
                        ))
                    }
                </View>
                <Text style={styles.text}>Featured By Convo</Text>
            </ScrollView>
        </View>
    )
}

export default Search

const getStyles = (appearanceMode: appearanceStateType) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: appearanceMode.backgroundColor
        },
        text: {
            color: appearanceMode.textColor,
            fontFamily: 'extrabold',
            fontSize: 15,
            marginVertical: 15,
            marginLeft: 10
        },
        usercardContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 5,
            justifyContent: 'space-between'
        }
    })
}