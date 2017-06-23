import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import styles from './setting/ButtonStyles'

export default class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render() {
    return (
      <View style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </View>
    )
  }
}
