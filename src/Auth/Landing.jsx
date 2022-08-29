import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Landing({navigation}) {
  return (
    <View>
        <Text>Landing</Text>
        <Button title='Home' onPress={()=> navigation.replace("Home")}></Button>
    </View>
  )
}
