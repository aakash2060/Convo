import { View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import NotificationBox from '../NotificationBox'
import notifications from '@/assets/data/notifications'

const NotificationFeed = () => {
    const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
    const styles = getStyles(appearanceMode)
    const notificationData = notifications
    return (
        <View>
            <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 120, paddingBottom: 120 }}
            keyExtractor={(notificationData) => notificationData.id.toString()}
            data={notificationData}
            renderItem={({ item }) => <NotificationBox message={item.message} convo={item.convo} type={item.type} from={item.from} id={item.id} topic={item.topic}/>}
            />
        </View>
    )
}

export default NotificationFeed
