import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard/Dashboard';
import Buses from '../Buses/Buses';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Dining from '../Dining/Dining';
import Protection from '../Protection/Protection';
import Menu from '../Menu/Menu';

const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        if (route.name === 'Dashboard') {
          return  <MaterialIcons name="dashboard" size={24} color= {color} />;
        } else if (route.name === 'Buses') {
          return <Ionicons name="md-bus-sharp" size={24} color= {color} />;
        } else if(route.name === 'Dining'){
          return <Ionicons name="ios-fast-food" size={24} color= {color} />;
        } else if(route.name === 'Protection'){
          return <MaterialIcons name="security" size={24} color= {color} />;
        } else if(route.name === 'Menu'){
          return <Ionicons name="md-menu" size={24} color= {color} />;
        }

        
      },
      tabBarActiveTintColor: '#003b5c',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Buses" component={Buses} />
        <Tab.Screen name="Dining" component={Dining} />
        <Tab.Screen name="Protection" component={Protection} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
  )
}
