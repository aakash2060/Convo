import { StyleSheet, View } from 'react-native'
import BottomNavigationBar from '@/components/BottomNavigationBar'
import React from 'react'
import Home from '@/components/Home'
import Search from '@/components/Search'
import KeepUp from '@/components/KeepUp'
import Notifications from '@/components/Notifications'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import BottomSheet from '@/components/BottomSheet'
const BottomTabLayout = () => {
  const activeTab = useSelector((state:RootState) => state.navigation.activeTab)
  const convoStarterStater = useSelector((state:RootState) => state.navigation.convoStarter)
  return (
    <View style={styles.container}>
        {activeTab.name === 'Home' && <Home/>}
        {activeTab.name === 'Search' && <Search/>}
        {activeTab.name === 'Keep Up' && <KeepUp/>}
        {activeTab.name === 'Notifications' && <Notifications/>}
        { convoStarterStater && <BottomSheet/>}
        { !convoStarterStater && <BottomNavigationBar/>}
    </View>
  )
}

export default BottomTabLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})