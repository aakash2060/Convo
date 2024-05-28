import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import { Feather } from '@expo/vector-icons'
import { setActiveProfileTab } from '@/state/features/userSlice'

const ProfileDetail = () => {
    const appearanceMode = useSelector((state:RootState) => state.appearance.currentMode)
    const styles = getStyles(appearanceMode)
    const userData = useSelector((state:RootState) => state.user.userData)
    const authenticatedUserData = useSelector((state:RootState) => state.user.authenticatedUserData)
    const tabs = useSelector((state:RootState) => state.user.tabs)
    const activeTab = useSelector((state:RootState) => state.user.activeTab)
    const dispatch = useDispatch()


    const handleActivetabButton = (index: Number) => {
        dispatch(setActiveProfileTab(index))
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.profileDetailContainer}>
                    { <Image style={styles.profileImage} source={{ uri: userData.profileImage }}/>}

                    <View style={styles.userDetailContainer}>
                        <View style={styles.usernameContainer}>
                            <View style={styles.usernameButtonContainer}>
                                <Text style={styles.username}>{userData.username}</Text>

                                <TouchableOpacity style={styles.audioButton}>
                                    <Feather name='volume-2' size={25} color={'white'}/>
                                </TouchableOpacity>  
                            </View>

                             { userData.id !== authenticatedUserData.id && <TouchableOpacity style={styles.keepupButton}>
                                <Text style={styles.keepupText}>Keep Up</Text>
                            </TouchableOpacity> }        
                        </View>

                        <View style={styles.bioContainer}>
                            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.bio}>{userData.bio}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.tabsContainer}>
                    {tabs.map((tab, index) => {
                        if(tabs[index] === activeTab) {
                            return (
                                <TouchableOpacity onPress={() => handleActivetabButton(index)} style={styles.activeTabButton} key={index}>
                                    <Text style={styles.activeTabText}>{tab}</Text>
                                    <View style={styles.tabHighlighter}/>
                                </TouchableOpacity>
                            )
                        } else return (
                            <TouchableOpacity onPress={() => handleActivetabButton(index)} style={styles.inactiveTabButton} key={index}>
                                <Text style={styles.inactiveTabText}>{tab}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>


                
            </View>

        </View>
    )
}

export default ProfileDetail
