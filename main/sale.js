import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class gorod extends Component {
  render() {
    return (
         <View  style={styles.cont}>
            <View style={{marginLeft: 20}}>
             <View>
                 <Text style={{color: '#979797', fontSize: 18, marginTop: 30}}>Вам доступно</Text>
             </View>
             <View>
                 <View style={styles.block}>
                    <Text style={styles.text}>Гипермаркет</Text>
                    <Text style={styles.num}>7%</Text>
                 </View>
            </View>
            <View>
                 <View style={styles.block}>
                    <Text style={styles.text}>Студия загара</Text>
                    <Text style={styles.num}>40%</Text>
                 </View>
            </View>
            <View>
                 <View style={styles.block}>
                    <Text style={styles.text}>Зеленая карта</Text>
                    <Text style={styles.num}>20%</Text>
                 </View>
            </View>
            <View>
                 <View style={styles.block}>
                    <Text style={styles.text}>Зеленая аптека</Text>
                    <Text style={styles.num}>20%</Text>
                 </View>
            </View>
           </View>
           <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.but}><Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Получить другие скидки</Text></TouchableOpacity>
            </View>
         </View>
         
    );
  }
}

const styles = StyleSheet.create({
  cont: {
     flex: 1,
     backgroundColor: '#fff'
  },
  block: {
     width: 323,
     height: 111,
     backgroundColor: '#F9F9F9',
     flexDirection: 'row',
     borderRadius: 17,
     marginTop: 15,
     justifyContent: 'space-between',
     alignItems: 'center'
  },
  num: {
      fontSize: 32,
      fontWeight: 'bold'
  },
  text: {
      fontSize: 18,
      color: '#4A4956',
      paddingLeft: 13
  },
  but: {
    width: 294,
    borderRadius: 23,
    height: 50,
    backgroundColor: '#93CDF5',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center'
  }

})