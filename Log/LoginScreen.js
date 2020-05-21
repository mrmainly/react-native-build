import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';


export default LoginScreen = ({navigation}) => {

        return(
            <View style = {styles.conteiner}>
               <TextInput style={styles.input} placeholder="введите свой номер" />
               <TouchableOpacity style={styles.but} title="Добавить" onPress = {() => navigation.navigate('LoginTwoScreen')}><Text style={{color: '#fff'}}>Добавить</Text></TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
     conteiner: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f4fb'
     },
     input: {
       borderRadius: 23,
       width: 294,
       backgroundColor: '#fff',
       height: 44,
       paddingLeft: 19,
     },
     but: {
       marginTop: 70,
       width: 250,
       borderRadius: 23,
       height: 44,
       backgroundColor: '#9dc2ff',
       alignItems: 'center',
       justifyContent: 'center',

     }

})