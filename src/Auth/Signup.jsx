import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Signin({route}) {

  const {type} = route.params;

  return (
    <View style = {styles.Main}>
        <Text style = {{alignSelf: 'center', color: 'white', fontSize: 28, fontWeight: '500'}}>Wits Services</Text>
        <Text style = {{alignSelf: 'center', color: 'white', fontSize: 15, fontWeight: '500', marginBottom: 50}}>{type}</Text>
        <TextInput placeholder='Full name' style = {styles.Input}/>
        <TextInput placeholder='Email' style = {styles.Input}/>
        <TextInput placeholder='Password' secureTextEntry style = {styles.Input}/>

        {type === "Staff" &&
        <Text style = {{color: 'white'}}>Choose Department</Text>
        }

        <TouchableOpacity style = {styles.Buttons}>
          <Text style = {{fontWeight: 'bold', color: 'white'}}>Create Account</Text>
        </TouchableOpacity>

        <Text style = {{alignSelf: 'center', color: 'gray', fontSize: 15, fontWeight: '500', marginTop: 50}}>Already have an account? <Text style = {{fontWeight: 'bold', color: '#BBA14F', textDecorationLine: 'underline'}}>LOGIN</Text></Text>

        
    </View>
  )
}

const styles = StyleSheet.create({
  Main:{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 100,
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
    backgroundColor: '#BBA14F'
  }
}); 
