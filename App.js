import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Log/LoginScreen';
const Stack = createStackNavigator();
import LoginTwoScreen from './Log/LoginTwoScreen';
import pasport from './Log/pasport';
import first from './main/fist'
import oflain from './main/oflain'
import gorod from './maps/gorod'
import gorodTwo from './maps/gorodTwo'
import progress from './main/progress'
import potera from './maps/potera'
import sale from './main/sale'
export default class App extends Component {
  render() {

    return (
          <NavigationContainer>
             <Stack.Navigator>
                 <Stack.Screen options={{headerShown: false}} name="first" component={first}/>
                 <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
                 <Stack.Screen options={{headerShown: false}} name="LoginTwoScreen" component={LoginTwoScreen} />
                 <Stack.Screen options={{headerShown: false}} name="pasport" component={pasport} />
                 <Stack.Screen options={{ title: 'офлайн карты' }} name="oflain" component={oflain}/>
                 <Stack.Screen options={{ title: 'Ысыах' }} name="gorod" component={gorod}/>
                 <Stack.Screen options={{ title: 'Старый город' }} name="gorodTwo" component={gorodTwo}/>
                 <Stack.Screen options={{ title: 'Мои достижения' }} name="progress" component={progress}/>
                 <Stack.Screen options={{title: 'Татта'}} name="potera" component={potera} />
                 <Stack.Screen options={{title: 'Скидки'}} name="sale" component={sale} />
              </Stack.Navigator>
          </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
  }
})