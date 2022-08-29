import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Logo from '../assets/wits.jpeg';

export default function Splash({navigation}) {

  setTimeout(()=>{
    navigation.replace("Landing");
  }, 350);

  return (
    <View style = {styles.Main}>
       <Image source={Logo} style = {styles.Logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  Main:{
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Logo:{
    width: 300,
    height: 180
  }
});
