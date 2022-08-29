import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Signin() {
  return (
    <View style = {styles.Main}>
        <Text>Sign in</Text>
        <TextInput placeholder='Full name' style = {styles.Input}/>
        <TextInput placeholder='Email' style = {styles.Input}/>
        <TextInput placeholder='Password' secureTextEntry style = {styles.Input}/>

        <TouchableOpacity style = {styles.Buttons}>
          <Text style = {{fontWeight: 'bold'}}>Create Account</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Main:{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 49,
    paddingHorizontal: 12, 
    backgroundColor:'#003b5c'
  }, 
  Input:{
    padding: 15,
    borderRadius: 10,
    marginTop: 12, 
    backgroundColor: 'white'
  }, 
  Buttons:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 60, 
    backgroundColor: 'yellow'
  }
}); 
