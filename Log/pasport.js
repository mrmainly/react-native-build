import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image,} from 'react-native';


export default pasport = ({navigation}) => {
        return(
            <View style = {styles.conteiner}>

              <View style={{ flexDirection: 'row',  }}>

                <View>
                    <Text style={{fontSize: 34, fontWeight: '600',}}>Паспорт</Text>
                    <Image style={styles.imga} source={require('./../assets/xoBa.jpg')} />
               </View>

                <View style={{ flexDirection: 'column', marginTop: 80 }}>
                <View style={{ flexDirection: 'row', }}>

                 <TouchableOpacity style={styles.leftM}>
                   <Text>М</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.rightd}>
                   <Text>Ж</Text>
                 </TouchableOpacity>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 16}}>Дата рождения</Text>
                  <TextInput placeholder="Дата"style={styles.inputy}  />
               </View>
               </View>
              </View>

               <TextInput placeholder="Имя" style={styles.input} onChangeText/>
               <TextInput placeholder="Фамиля" style={styles.input} />
               <TextInput placeholder="Отчество" style={styles.input} />
               <View>

               <Text style={styles.texty}>Страна</Text>
               <TextInput placeholder="Россияйская федерация" style={styles.input} />
               <Text style={styles.texty}>Тип</Text>
               <TextInput placeholder="Интерес" style={styles.input} />

               </View>

               <TouchableOpacity style={styles.but} title="Добавить" onPress = {() => navigation.navigate('first')}><Text style={{color: '#fff'}}>Отправить код повторно</Text></TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
     conteiner: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f4fb',
     },
     input: {
       marginTop: 25,
       paddingLeft: 19,
       borderRadius: 23,
       width: 315,
       backgroundColor: '#fff',
       height: 38,
     },
     but: {
       marginTop: 70,
       width: 250,
       borderRadius: 23,
       height: 44,
       backgroundColor: '#9dc2ff',
       alignItems: 'center',
       justifyContent: 'center'
     },
     texty: {
         fontSize: 12,
         top: 23,
     },
     imga: {
       borderRadius: 64,
       width: 124,
       height: 124,
       marginRight: '15%',
       marginTop: 13
     },
     inputy: {
      borderRadius: 23,
      width: 112,
      backgroundColor: '#fff',
      height: 26,
      paddingLeft: 19,
     },
     leftM: {
       color: "#fff",
       backgroundColor: "#59A2F1",
       borderColor: "#59A2F1",
       borderStyle: "solid",
       borderWidth: 1,
       width: 53,
       height: 31,
       borderTopLeftRadius: 3,
       borderBottomLeftRadius: 3,
       justifyContent: 'center',
       alignItems: 'center'
     },
     rightd: {
      borderColor: "#59A2F1",
      borderStyle: "solid",
      borderWidth: 1,
      width: 53,
      height: 31,
      borderTopRightRadius: 3,
      borderBottomRightRadius: 3,
      justifyContent: 'center',
      alignItems: 'center'
     }
})