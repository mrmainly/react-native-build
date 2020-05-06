import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
    return (
       <View style = {styles.conteiner}>
           <Text style = {styles.textDec}>Home complit</Text>
           <Button title="go Donats" onPress = {() => props.navigation.navigate('donats')} />
       </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDec: {
       fontSize: 30
    }
})