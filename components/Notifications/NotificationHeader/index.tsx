import { Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import getStyles from './styles'
import { BlurView } from 'expo-blur'

const NotificationHeader = () => {
  const appearanceMode = useSelector((state: RootState) => state.appearance.currentMode)
  const numberOfNotifications = useSelector((state: RootState) => state.notifications.numberOfNotifications)
  const styles = getStyles(appearanceMode)
  return (
    <BlurView intensity={40} style={styles.container}>
      { numberOfNotifications === 0 && <Text style={styles.headerText}>No new notifications</Text>}
      { numberOfNotifications > 0 && <Text style={styles.headerText}>{numberOfNotifications} new notifications</Text>}
    </BlurView>
  )
}

export default NotificationHeader