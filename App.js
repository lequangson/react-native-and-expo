import React from 'react';
// import { Font } from 'expo'
import { StyleSheet } from 'react-native';
import Login from './app/Login'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      correntPage: 1
    }
  }

  render() {
    return (
      <Login />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: colors.defaultColor.color_text,
    alignItems: 'center',
    // fontFamily: 'open-sans-bold',
    justifyContent: 'space-around'
  }
});
