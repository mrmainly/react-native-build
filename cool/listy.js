import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, } from 'react-native';

export default function addTodo(props) {
    return (
       <View style= {styles.full}>
         <View style= {styles.conten}>
          <Image style={styles.img} source={require('./../assets/danilov.jpg')} />
          <View style={styles.cont}>
          <Text style={styles.tes}>Даниловская мануфактура</Text>
          <Text style={styles.potext}>Это место не просто...</Text>
          </View>
         </View>

         <View style= {styles.conten}>
          <Image style={styles.img} source={require('./../assets/vinzav.jpg')} />
          <View style={styles.cont}>
          <Text style={styles.tes}>винзавод</Text>
          <Text style={styles.potext}>в советское время...</Text>
          </View>
         </View>

         <View style= {styles.conten}>
          <Image style={styles.img} source={require('./../assets/flackon.jpg')} />
          <View style={styles.cont}>
          <Text style={styles.tes}>Флакон</Text>
          <Text style={styles.potext}>место было создано...</Text>
          </View>
         </View>

         <View style= {styles.conten}>
          <Image style={styles.img} source={require('./../assets/garage.jpg')} />
          <View style={styles.cont}>
          <Text style={styles.tes}>garage</Text>
          <Text style={styles.potext}>Не так давно «Гараж»...</Text>
          </View>
         </View>

         <View style= {styles.conten}>
          <Image style={styles.img} source={require('./../assets/strelka.jpg')} />
          <View style={styles.cont}>
          <Text style={styles.tes}>ArtPley</Text>
          <Text style={styles.potext}>Это место можно назвать...</Text>
          </View>
         </View>

         <View style= {styles.conten}>
          <Image style={styles.img} source={require('./../assets/red-oct.jpg')} />
          <View style={styles.cont}>
          <Text style={styles.tes}>Красный октябрь</Text>
          <Text style={styles.potext}>Странно вспомнить, но лет десять... </Text>
          </View>
         </View>


    </View>
    )
}

const styles = StyleSheet.create({
    cont: {
      flexDirection: "column",
      marginLeft: 20
    },
    tes: {
      width:'100%',
      fontSize: 17,
      fontWeight: 'bold'
    },
    conten: {
       flexDirection: "row",
       
       marginTop: 10
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginStart: 10
    }
    
})