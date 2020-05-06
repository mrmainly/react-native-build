import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function donats() {
    return (
       <View style = {styles.conteiner}>
           <Text style = {styles.textDec}>Donats complit</Text>
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