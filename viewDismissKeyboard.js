import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'

const DismissKeyboardHOC = (Component) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Component {...props}>
        {children}
      </Component>
    </TouchableWithoutFeedback>
  )
}

export const ViewDismissKeyboard = DismissKeyboardHOC(View)
