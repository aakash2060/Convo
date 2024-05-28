import { BlurView } from 'expo-blur'
import { Text, View } from '../Themed'
import getStyles from './styles'
import React from 'react'
import { Image, TouchableOpacity, useColorScheme } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { FontAwesome } from '@expo/vector-icons'
import { setActiveTab, toggleConvoStarterButton } from '@/state/features/navigationSlice'
import Animated, { FlipInXDown, FlipOutXDown, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'


const BottomNavigationBar = () => {
  const colorScheme = useColorScheme()
  const tabs = useSelector((state:RootState) => state.navigation.tabs)
  const activeTab = useSelector((state:RootState) => state.navigation.activeTab)
  const mode = useSelector((state:RootState) => state.appearance.currentMode)
  const dispatch = useDispatch()
  const styles = getStyles(mode)
  const visibilityValue = useSharedValue(1)

  const navigationVisibility = useAnimatedStyle(() => (
    {
      opacity: visibilityValue.value,
    }
  ))
  
  const showConvoStarter = () => {
    dispatch(toggleConvoStarterButton())
  }
  return (
      <Animated.View exiting={FlipOutXDown} entering={FlipInXDown} style={[navigationVisibility]}>
      <BlurView intensity={40} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.container}>
        <View style={styles.tabContainer}>
          <View style={styles.tabs}>
            {tabs.map((tab, index) => {
              if(tab.name === activeTab.name) {
              return(
              <Animated.View key={index}>
                <TouchableOpacity style={styles.activeTab} key={index}>
                  <Image style={styles.icon} source={tab.darkModeIcon}/>
                  {activeTab.name === 'Notifications' && <Image style={styles.icon} source={tab.notificationAbsentDarkModeIcon}/>}
                  <Text style={styles.tabActiveName} key={index}>{tab.name}</Text>
                </TouchableOpacity>
              </Animated.View>
               )
              } else {
                return(
                  <Animated.View key={index}>
                  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => dispatch(setActiveTab(index))} key={index}>
                    { tab.name !== 'Notifications' && <Image style={styles.icon} source={mode.name === 'light' ? tab.lightModeIcon : tab.darkModeIcon}/>}
                    { tab.name === 'Notifications' && <Image style={styles.icon} source={mode.name === 'light' ? tab.notificationPresentLightModeIcon : tab.notificationPresentDarkModeIcon}/>}
                  </TouchableOpacity>
                </Animated.View>
                )
              }
            })}
          </View>
          <TouchableOpacity onPress={showConvoStarter} style={styles.startConvoButton}>
            <FontAwesome name='paper-plane' color={'white'} size={24}/>
          </TouchableOpacity>
        </View>
      </BlurView>
      </Animated.View>
  )
}

export default BottomNavigationBar

