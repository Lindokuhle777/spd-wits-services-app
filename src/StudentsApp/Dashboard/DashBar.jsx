import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../assets/logo.png';

const DashBar = () => {
    return (
       <View style = {style.Main}>
        <Image source={logo} style = {style.Logo}/>
       </View>
    );
}

const style = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#003b5c",
        paddingTop: 49,
        paddingBottom: 12,
        paddingHorizontal: 12,
        alignItems: 'start',
        justifyContent: 'center'
    }, 
    Logo:{
        width: 120,
        height: 50
    }

});

export default DashBar;
