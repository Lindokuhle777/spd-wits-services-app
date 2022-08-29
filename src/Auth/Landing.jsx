import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, ImageBackground} from 'react-native';
import image from '../assets/health.jpg';

export default function Landing({navigation}) {
  return (
    <View style = {{display: 'flex', flex: 1}}>
		 <ImageBackground source={image} resizeMode="cover" style = {styles.Main}>
		 <TouchableOpacity  style = {styles.Buttons} onPress = {()=> navigation.navigate("Signin")}>
		<Text style = {styles.InnerButton}>Continue as Staff</Text>
		</TouchableOpacity>

		<TouchableOpacity style = {styles.Buttons} onPress = {()=> navigation.navigate("Signin")}>
		<Text style = {styles.InnerButton}>Continue as Student</Text>
		</TouchableOpacity>
		
        <Button title='Home' onPress={()=> navigation.replace("Home")}></Button>
		 </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
	Main:{
		display: 'flex',
		flexDirection: 'column-reverse',
		flex: 1,
		//backgroundColor: 'red',
		paddingBottom: 50, 
		paddingHorizontal: 12
	},
	Buttons:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 12,
		padding: 12,
		backgroundColor: '#003b5c',
		borderRadius: 22
	}, 
	InnerButton:{
		color: 'white',
		fontSize: 17,
		fontWeight: '700'
	},
	Background:{
		flex: 1,
    	justifyContent: "center"
	}
});