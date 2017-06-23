import React from 'react';
// import { Font } from 'expo'
import { StyleSheet, View } from 'react-native';
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
      <View style={styles.container}>
        <Login />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  }
});
