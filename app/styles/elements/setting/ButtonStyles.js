import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../settings/'

export default StyleSheet.create({
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 50,
    backgroundColor: Colors.defaultColor.colorPrimary
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.primitiveColor.colorWhite,
    // fontFamily: 'openSansBold',
    fontSize: Fonts.size.medium
    // fontFamily: Fonts.type.base
  },
  buttonLogin: {
    paddingVertical: 15,
    elevation: 10,
    marginBottom: 12
  },
  buttonTextLogin: {
    fontSize: Fonts.size.regular,
    fontWeight: 'bold'
  }
})
