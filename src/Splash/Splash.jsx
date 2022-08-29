import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Splash({navigation}) {

  setTimeout(()=>{
    navigation.replace("Landing");
  }, 350);

  return (
    <View>
        <Text>Splash</Text>
    </View>
  )
}
