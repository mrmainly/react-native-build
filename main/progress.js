import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default class progress extends Component {
  render() {
    return (
         <View style={styles.conteiner}>
           <View style={styles.header}>
            <Text style={{color: '#CEC7C7', fontSize: 20}}>У вас пока нету достижений</Text>
            <TouchableOpacity style={styles.but} title="Добавить" onPress = {() => navigation.navigate()}><Text style={{color: '#fff'}}>Начать</Text></TouchableOpacity>
           </View>
             <Animatable.View style={styles.drow} animation="fadeInUpBig">
                 <View style={styles.nachalo}>
                     <Text style={{fontSize: 18, fontWeight: 'bold',}}>Увеломление</Text>
                     <View style={styles.clock}>
                     <FontAwesome name="clock-o" backgroundColor="#97ADB6" color="#97ADB6" size={15} />
                     <Text style={{color: '#97ADB6', marginLeft: 6}}>Сегодня</Text>
                     </View>
                     <Text>Иван Максимов получает 2 уровень</Text>

                     <View style={styles.clock}>
                     <FontAwesome name="clock-o" backgroundColor="#97ADB6" color="#97ADB6" size={15} />
                     <Text style={{color: '#97ADB6', marginLeft: 6}}>Вчера</Text>
                     </View>
                     <Text>Пройдено 2590 м. за 32:05 мин.</Text>

                     <View style={styles.clock}>
                     <FontAwesome name="clock-o" backgroundColor="#97ADB6" color="#97ADB6" size={15} />
                     <Text style={{color: '#97ADB6', marginLeft: 6}}>Реклама</Text>
                     </View>
                     <Text>Покупайте саха ягоды</Text>

                 </View>
                 
             </Animatable.View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff"
 },
  drow: {
    flex: 1,
     backgroundColor: "#fff",
     borderTopLeftRadius: 29,
     borderTopRightRadius: 29,
     flexDirection: 'column',
     shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 15,
  },
  header: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nachalo: {
      marginTop: 30,
      marginLeft: 42,
  },
  clock: {
      flexDirection: 'row',
      marginTop: 10
  },
  but: {
    marginTop: 70,
    width: 203,
    borderRadius: 23,
    height: 57,
    backgroundColor: '#9dc2ff',
    alignItems: 'center',
    justifyContent: 'center'
  }

})