import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default oflain = ({navigation}) => {

        return(
            <View style = {styles.conteiner}>
              <View style={{ flexDirection: 'row',  justifyContent: 'space-between', width: '85%', marginTop: 63}}>
              <View style={{alignItems: 'flex-start', flexDirection: 'row'}}><Text>1</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('gorod')}><Text style={{fontSize: 14, marginLeft: 15}}>Ысыах</Text></TouchableOpacity>
              </View>
                 <TouchableOpacity><FontAwesome name="download" backgroundColor="#007AFF" color="#007AFF" size={22} /></TouchableOpacity>
                </View>
              <View style={styles.line} />

              <View style={styles.main}>
              <View style={{alignItems: 'flex-start', flexDirection: 'row'}}><Text>2</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('gorodTwo')} ><Text style={{fontSize: 14, marginLeft: 15}}>Старый город</Text></TouchableOpacity>
              </View>
                 <TouchableOpacity><FontAwesome name="download" backgroundColor="#007AFF" color="#007AFF" size={22} /></TouchableOpacity>
                </View>
              <View style={styles.line} />
            </View>
        );
}

const styles = StyleSheet.create({
     main: {
      flexDirection: 'row',  justifyContent: 'space-between', width: '85%',
      marginTop: 15
     },
     conteiner: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
     },
     line: {
      backgroundColor:  '#f2f4fb',
      height: 2,
      width: 294,
      marginTop: 15,
    }
})