import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class gorod extends Component {
  render() {
    return (
         <ImageBackground style={styles.cont} source={require('../assets/image.png')}></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
     flex: 1,
  }
})