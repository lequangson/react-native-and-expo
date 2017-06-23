import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../settings/'

export default StyleSheet.create({
  textInput: {
    minHeight: 40,
    borderColor: Colors.defaultColor.colorBorder,
    borderTopWidth: 1,
    borderRadius: 1,
    color: Colors.primitiveColor.colorGrayLight,
    fontSize: Fonts.size.input
  }
})
