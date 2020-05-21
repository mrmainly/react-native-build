import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import oflain from './oflain';

export default class first extends Component {
  render() {
    return (
         <ImageBackground source={require('../assets/Vector.png')} style={styles.conteiner}>
           
               <TouchableOpacity onPress={() => this.props.navigation.navigate('potera')}  style={styles.png}>
                   <Image source={require('../assets/oum.png')} />
                </TouchableOpacity>
            
           <View style={styles.header}>
           </View>
           
             <Animatable.View style={styles.drow} animation="fadeInUpBig">
             <ScrollView>
               <View style={styles.one}>
                 <View style={{marginTop: 4}}>
                 <FontAwesome name="user-o" backgroundColor="#97ADB6" color="#97ADB6" size={27} />
                 </View>
                  <View style={styles.floot}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}><Text style={{fontSize: 14,}}>Паспорт</Text></TouchableOpacity>
                   <Text style={{color: "#97ADB6", fontSize: 12}}>Генадий Горин из города орла</Text>
                 </View>
               </View> 
               <View style={styles.line} />
               
               <View style={styles.one}>
                 <View style={{marginTop: 4}}>
                 <FontAwesome name="user-o" backgroundColor="#97ADB6" color="#97ADB6" size={28} />
                 </View>
                  <View style={styles.floot}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('progress')}><Text style={{fontSize: 14,}}>Достижения</Text></TouchableOpacity>
                   <Text style={{color: "#97ADB6", fontSize: 12}}>Цели, задачи</Text>
                 </View>
               </View> 
               <View style={styles.line} />

               <View style={styles.one}>
                 <View style={{marginTop: 4}}>
                 <FontAwesome name="user-o" backgroundColor="#97ADB6" color="#97ADB6" size={27} />
                 </View>
                  <View style={styles.floot}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('oflain')}><Text style={{fontSize: 14,} }>Офлайн карты</Text></TouchableOpacity>
                   <Text style={{color: "#97ADB6", fontSize: 12}}>Скачанные карты</Text>
                 </View>
               </View> 
               <View style={styles.line} />

               <View style={styles.one}>
                 <View style={{marginTop: 4}}>
                 <FontAwesome name="user-o" backgroundColor="#97ADB6" color="#97ADB6" size={27} />
                 </View>
                  <View style={styles.floot}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('sale')}><Text style={{fontSize: 14,} }>Скидки</Text></TouchableOpacity>
                   <Text style={{color: "#97ADB6", fontSize: 12}}>Скидки</Text>
                 </View>
               </View> 
               <View style={styles.line} />
               </ScrollView>
             </Animatable.View>
         </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    
 },
  drow: {
    flex: 1,
     backgroundColor: "#fff",
     borderTopLeftRadius: 29,
     borderTopRightRadius: 29,
     flexDirection: 'column',
  },
  header: {
    flex: 2,
  },
  one: {
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 23,
  },
   floot: {
     flexDirection: 'column',
     marginLeft: 17,
   },
   line: {
     backgroundColor:  '#f2f4fb',
     height: 2,
     width: 294,
     marginTop: 15,
     marginLeft: 33
   },
   png: {
     position: 'absolute',
     marginTop: 400,
     marginLeft: 250
   }
})