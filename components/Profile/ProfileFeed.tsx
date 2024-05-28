import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import React from 'react'
import Convo from '../Convo'
import ProfileDetail from './ProfileDetail'

const ProfileFeed = () => {
    const userData = useSelector((state:RootState) => state.user.userData)
    return (
        <View>
            <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 120 }}
            ListHeaderComponent={<ProfileDetail/>}
            data={userData.convos}
            keyExtractor={(convo) => String(convo.id)}
            renderItem={(convo) => <Convo activeInRoom={convo.item.activeInRoom} user={convo.item.user} id={convo.item.id} images={convo.item.images} numberOfKeepUps={convo.item.numberOfKeepUps} convoStarter={convo.item.convoStarter}/>}
            />
        </View>
    )
}

export default ProfileFeed

