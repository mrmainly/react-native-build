import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function addTodo(props) {
    return (
       <View style= {styles.full}>
         <TextInput style = {styles.input} />
         <Button style ={styles.But} title="search" />
       </View>
    )
}

const styles = StyleSheet.create({
    full: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
        
    },
    input: {
        borderStyle: "solid",
        width: '80%',
        borderBottomWidth: 1
    },
    
})