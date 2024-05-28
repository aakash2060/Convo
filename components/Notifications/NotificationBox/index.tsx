import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import getStyles from './styles'
import { RootState } from '@/state/store'
import { notificationType } from '@/types'

const NotificationBox = ({ topic, from, type, convo, message }: notificationType) => {
    const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
    const notificationTypes = useSelector((state: RootState) => state.notifications.notificationTypes)
    const styles = getStyles(appearanceMode)

    const renderNotificationBox = () => {
        if(type === 'friend') {
            return (
                <TouchableOpacity style={styles.container}>
                    <View style={styles.friendContentContainer}>
                        <Image source={{ uri: from?.profileImage }} style={styles.profileImage}/>
                        <Text style={styles.friendMessage}><Text style={styles.friendName}>{ from?.name }</Text> { topic }</Text>
                    </View>
                </TouchableOpacity>
            )
        } else if(type === 'keepup') {
            return (
                <TouchableOpacity style={styles.container}>
                    <View style={styles.keepupContentContainer}>
                        <Image source={{ uri: from?.profileImage }} style={styles.keepupUserImage}/>
                        <Text style={styles.keepupMessage}><Text style={styles.keepupUsername}>{ from?.username }</Text> { topic } { convo?.convoStarter && <Text style={styles.keepupConvoText}>{ convo?.convoStarter }</Text>}</Text>
                    </View>
                </TouchableOpacity>
            )
        } else if(type === 'convoStart') {
            return (
                <TouchableOpacity style={styles.container}>
                    <View style={styles.convoStartContentContainer}>
                            <Image source={{ uri: from?.profileImage }} style={styles.convoStartUserImage}/>

                        <View style={styles.right}>
                            <Text style={styles.convoInfoText}><Text style={styles.convoStartUsername}>{ from?.username } </Text>{ topic } </Text>
                            <Text style={styles.convoStarter}>{ convo?.convoStarter }</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        } else if(type === 'highlight') {
            return (
                <TouchableOpacity style={styles.container}>
                    <View style={styles.highlightContentContainer}>
                        <Image source={{ uri: from?.profileImage }} style={styles.profileImage}/>
                        <Text style={styles.highlightMessage}><Text style={{ fontFamily: 'bold' }}>{from?.username}</Text> { topic }</Text>
                    </View>
                </TouchableOpacity>
            )
        } else if(type === 'reply') {
            return (
                <TouchableOpacity style={styles.container}>
                    <View style={styles.replyInfoContainer}>
                        <Image style={styles.profileImage} source={{ uri: from?.profileImage }}/>
                        <Text style={styles.replyInfo}><Text style={styles.replyUsername}>{ from?.username }</Text> { topic } <Text style={styles.replyConvoStarter}>{ convo?.convoStarter }</Text></Text>
                    </View>

                    <View style={styles.replyMessageContainer}>
                        <Text style={styles.replyMessage}>{ message }</Text>
                    </View>
                </TouchableOpacity>
            )
        } else if(type === 'special') {
            return (
                <TouchableOpacity style={styles.specialContainer}>
                    <Text style={styles.specialText}>{ message }</Text>
                </TouchableOpacity>
            )
        }
    }
    return (
        <View>
           {renderNotificationBox()}
        </View>
    )
}

export default NotificationBox

