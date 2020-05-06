import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './last/chat';
import Favorites from './last/favorites';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './cool/Home';
import donats from './cool/donats';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
      creatHomeStack = () => 
      <Stack.Navigator>
       <Stack.Screen name="Home" component= {Home}/>
       <Stack.Screen name="donats" component= {donats}/>
      </Stack.Navigator>
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={creatHomeStack} />
          <Drawer.Screen name="Chat" component={Chat}/>
          <Drawer.Screen name="Favorites" component={Favorites} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}