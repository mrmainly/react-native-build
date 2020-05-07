import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AddTodo from "./addTodo";
import Listy from './listy';
export default function Home(props) {
    return (
       <View style= {styles.cont}>
           <AddTodo />
           <Listy />
           <Button  title="g Donats" onPress = {() => props.navigation.navigate('donats')} />
       </View>
    )
}

const styles = StyleSheet.create({
    cont: {
       
    }
})