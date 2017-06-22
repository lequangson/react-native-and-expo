import React from 'react'
import { View } from 'react-native'
import Button from '../elements/Button'
import { Colors } from '../settings/'

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          text={'Đăng nhập bằng Facebook'}
          styles={{ backgroundColor: `${Colors.primitiveColor.colorBlue}` }}
        />
      </View>
    )
  }
}
