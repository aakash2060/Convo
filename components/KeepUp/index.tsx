import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appearanceStateType } from '@/state/features/appearanceSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'

const KeepUp = () => {
  const mode = useSelector((state: RootState) => state.appearance.currentMode)
    const styles = getStyles(mode)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Keep Up</Text>
      </View>
    )
}

export default KeepUp

const getStyles = (mode: appearanceStateType) => {
  return StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: mode.backgroundColor
      },
      text: {
          color: mode.textColor,
          fontFamily: 'bold',
          fontSize: 16,
      }
  })
}