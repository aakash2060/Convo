import { StyleSheet, ScrollView, Platform, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appearanceStateType } from '@/state/features/appearanceSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import Header from './Header'
import users from '@/assets/data/users'
import Highlights from './Highlights'
import highlights from '@/assets/data/highlights'
import { convoType, highlightsType, userType } from '@/types'
import { View } from '../Themed'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Convo from '../Convo'
import convoData from '@/assets/data/convos'
import { Entypo } from '@expo/vector-icons'
import FromPrivate from './FromPrivate'
const Home = () => {
    const user = users[0]
    const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
    const indexState = useSelector((state: RootState) => state.highlights.indexState)
    const styles = getStyles(appearanceMode)
    const highlightsData: highlightsType[] = highlights
    const [convos, setConvos] = useState<Array<convoType>>([])
    const [privateConvoList, setPrivateConvoList] = useState<Array<userType>>([])
    const [highlightUsers, setHighlightUsers] = useState<Array<userType>>([])
    const [allHighLights, setAllHighlights] = useState<Array<highlightsType>>([])

    const getAllHighlightUsers = () => {
        setHighlightUsers(highlightsData.map(highlight => highlight.user))
    }

    const getPrivateList = () => {
        setPrivateConvoList(users.map(user => user))
    }

    const getAllHighlights = () => {
        setAllHighlights(highlightsData.map(highlight => highlight))
    }

    const getAllConvos = () => {
        setConvos(convoData.map(convos => convos))
    }


    useEffect(() => {
        getAllConvos()
        getAllHighlights()
        getAllHighlightUsers()
        getPrivateList()
    }, [])
    return (
        <View style={styles.container}>
            <Header id={user.id} profileImage={user.profileImage}/>
            <KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: Platform.OS === 'android' ? 90 : 100 }} extraScrollHeight={Platform.select({ android: 210})} enableOnAndroid={true} showsVerticalScrollIndicator={false}>
                <Highlights numberOfKeepUps={highlightsData[indexState].numberOfKeepUps} highLightUsers={highlightUsers} id={highlightsData[indexState].id} activeInRoom={highlightsData[indexState].activeInRoom} user={highlightsData[indexState].user} image={highlightsData[indexState].image}/>

                
                <View style={styles.convoContainer}>
                    <Text style={styles.locationConvoText}>Conversations close to you</Text>
                    <ScrollView>
                        {
                            convos.map((convo, index) => {
                                return <Convo chats={convo.chats} numberOfKeepUps={convo.numberOfKeepUps} lastUpdated={convo.lastUpdated} dateCreated={convo.dateCreated} id={convo.id} user={convo.user} convoStarter={convo.convoStarter} activeInRoom={convo.activeInRoom} images={convo.images} key={index}/>
                            })
                        }
                    </ScrollView>
                    <TouchableOpacity style={styles.viewMoreButton}>
                        <Text style={styles.viewMoreText}>View More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.privateContainer}>
                    <View style={styles.privateHeader}>
                        <Text style={styles.privateHeaderText}>Friends Who Added To Private</Text>

                        <TouchableOpacity style={styles.viewAllInPrivateButton}>
                            <Text style={styles.viewAllInPrivateText}>View All In Private</Text>
                            <Entypo name='chevron-right' size={20} color={appearanceMode.primary}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            privateConvoList.map((privateConvoUser, index) => (
                                <FromPrivate id={privateConvoUser.id} key={index} convos={privateConvoUser.convos} name={privateConvoUser.name} profileImage={privateConvoUser.profileImage}/>
                            ))
                        }
                    </ScrollView>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default Home


const getStyles = (appearanceMode: appearanceStateType) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: appearanceMode.backgroundColor
        },
        convoContainer: {
            backgroundColor: appearanceMode.backgroundColor,
            marginTop: 12
        },
        locationConvoText: {
            color: appearanceMode.textColor,
            fontFamily: 'extrabold',
            fontSize: 15,
            marginVertical: 10,
            marginHorizontal: 10
        },
        viewMoreButton: {
            backgroundColor: appearanceMode.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 15
        },
        viewMoreText: {
            color: 'white',
            fontFamily: 'bold',
            fontSize: 15
        },
        privateContainer: {
            backgroundColor: appearanceMode.backgroundColor,
            marginTop: 50,
            marginHorizontal: 10,
        },
        privateHeader: {
            backgroundColor: appearanceMode.backgroundColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
        },
        privateHeaderText: {
            color: appearanceMode.textColor,
            fontFamily: 'extrabold',
            fontSize: 15,
        },
        viewAllInPrivateButton: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        viewAllInPrivateText: {
            color: appearanceMode.primary,
            fontFamily: 'bold',
            fontSize: 15,
        }
    })
}