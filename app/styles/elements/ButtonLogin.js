import React from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './setting/ButtonStyles'

export default class ButtonLogin extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    styles: PropTypes.object
  }

  render() {
    return (
      <View style={[styles.button, styles.buttonLogin, this.props.styles]}>
        <Text style={[styles.buttonText, styles.buttonTextLogin]}>{this.props.text}</Text>
      </View>
    )
  }
}
