import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Colors } from '../../../../constants'

export const ScreenContainerHOC = (Component) => {
  return ({ children, ...props }) => (
    <SafeAreaView style={s.container}>
      <Component {...props}>
        {children}
      </Component>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  }
})
