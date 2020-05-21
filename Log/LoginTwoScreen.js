import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';


export default LoginTwoScreen = ({navigation}) => {
        return(
            <View style = {styles.conteiner}>
               <TextInput placeholder="Введите код" style={styles.input} />
               <TouchableOpacity style={styles.but} title="Добавить" onPress = {() => navigation.navigate('pasport')}><Text style={{color: '#fff'}}>Отправить код повторно</Text></TouchableOpacity>
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
       paddingLeft: 19,
       borderRadius: 23,
       width: 294,
       backgroundColor: '#fff',
       height: 44,
     },
     but: {
       marginTop: 70,
       width: 250,
       borderRadius: 23,
       height: 44,
       backgroundColor: '#9dc2ff',
       alignItems: 'center',
       justifyContent: 'center'
     }
})