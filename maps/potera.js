import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Video from 'react-native-video'
export default class gorod extends Component {
  render() {
    return (
       <View style={{backgroundColor: '#fff', flex: 1}}>
         <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <Image source={require('../assets/kkk.png')} />
         </View>
         <View style={styles.cer}>
           <View>
              <Text style={styles.text}>Туры</Text>
           </View>
             <View style={styles.line} />
          <View style={{flexDirection: 'row'}}>
            <ImageBackground imageStyle={{borderRadius: 18}}  style={styles.imag} source={require('../assets/ypi.png')}>
               <View style={styles.imd} >
                 <View style={{marginLeft: 9, marginTop: 15}}>
                 <Text style={styles.tx}>Тур 1</Text>
                 <Text style={styles.tx}>историки этнографический</Text>
                 </View>
               </View>
            </ImageBackground>

            <ImageBackground imageStyle={{borderRadius: 18}}  style={styles.imag} source={require('../assets/ypi.png')}>
               <View style={styles.imd} >
                 <View style={{marginLeft: 9, marginTop: 15}}>
                 <Text style={styles.tx}>Тур 2</Text>
                 <Text style={styles.tx}>историки этнографический</Text>
                 </View>
               </View>
            </ImageBackground>
          </View>

          <View style={{flexDirection: 'row'}}>
          <ImageBackground imageStyle={{borderRadius: 18}}  style={styles.imag} source={require('../assets/ypi.png')}>
               <View style={styles.imd} >
                 <View style={{marginLeft: 9, marginTop: 15}}>
                 <Text style={styles.tx}>Тур 3</Text>
                 <Text style={styles.tx}>историки этнографический</Text>
                 </View>
               </View>
            </ImageBackground>

            <ImageBackground imageStyle={{borderRadius: 18}}  style={styles.imag} source={require('../assets/ypi.png')}>
               <View style={styles.imd} >
                 <View style={{marginLeft: 9, marginTop: 15}}>
                 <Text style={styles.tx}>Тур 4</Text>
                 <Text style={styles.tx}>историки этнографический</Text>
                 </View>
               </View>
            </ImageBackground>
            </View>

         </View>
         
       </View>
    );
  }
}

const styles = StyleSheet.create({
  imd: {
    backgroundColor: 'rgba(0,0,0, 0.60)', flex: 1, borderRadius: 18
  },

  cer: {
    marginTop: 40
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15
  },
  line: {
    backgroundColor:  '#f2f4fb',
    height: 2,
    width: '100%',
    marginTop: 15,
  },
  imag: {
    width: 160,
    height: 110,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 21
  },
  tx: {
    color: '#fff',
    fontSize: 17
  }
})