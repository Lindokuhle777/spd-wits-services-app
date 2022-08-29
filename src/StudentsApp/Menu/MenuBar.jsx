import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuBar = () => {
    return (
        <View style = {style.Main}>
            <View style = {style.Profile}>
            <View style = {style.Avater}>
                <Text style = {{fontSize: 20, fontWeight: 'bold'}}>G</Text>
            </View>
            <Text style = {{color: 'white', fontSize: 17, fontWeight: '600'}}>Given Mathebula</Text>
            </View>
           
            <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 30}}>Menu</Text>
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
        justifyContent: 'center',
        //borderRadius: 15,
       
    }, 
    Logo:{
        width: 120,
        height: 50
    },
    Profile:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 12, 
    }, 
    Avater:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 100,
        width: 40,
        height: 40,
        
        marginRight: 5
    }

});


export default MenuBar;
