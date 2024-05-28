import { Platform, TextInput, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import getStyles from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'

const SearchHeader = () => {
    const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
    const styles = getStyles(appearanceMode)

 
    const renderAppearanceModeView = () => {
        if(appearanceMode.name === 'light' || Platform.OS === 'android') {
            return (
                <View style={styles.container}>
                    <TextInput placeholderTextColor={appearanceMode.faint} placeholder='Search' style={styles.textInput}/>
                </View>
            )
        } else {
            return (
                <BlurView intensity={40} style={styles.container}>
                    <TextInput placeholderTextColor={appearanceMode.faint} placeholder='Search' style={styles.textInput}/>
                </BlurView>
            )
        }
    }

    return (
        <View style={styles.container}>
            {renderAppearanceModeView()}
        </View>
    )
}

export default SearchHeader
