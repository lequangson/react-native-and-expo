import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './setting/ButtonStyles'

export default class ButtonLogin extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, styles.buttonLogin, this.props.styles]} onPress={this.props.onPress}>
        <Text style={[styles.buttonText, styles.buttonTextLogin]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
