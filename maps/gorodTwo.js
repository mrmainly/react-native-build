import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class gorodTwo extends Component {
  render() {
    return (
         <ImageBackground style={styles.cont} source={require('../assets/potera.png')}></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
     flex: 1,
  }
})