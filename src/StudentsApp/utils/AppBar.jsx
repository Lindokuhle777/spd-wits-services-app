import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AppBar = ({title}) => {
    return (
        <View style = {style.Main}>
            <Text style = {style.Text}>{title}</Text>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }

});

export default AppBar;
