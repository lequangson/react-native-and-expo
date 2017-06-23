import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './setting/BackgroundImageStyles'

export default class BackgroundImage extends Component {
  static propTypes = {
    sourceBackgroundImage: PropTypes.number,
    styles: PropTypes.object

  }

  render() {
    return (
      <Image
        source={this.props.sourceBackgroundImage}
        style={[styles.BackgroundImageStyles, this.props.styles]}
      >
        {this.props.children}
      </Image>
    )
  }
}
