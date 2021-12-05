import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './components/MainScreen';
import Results from './components/Results';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    
<NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="Results" component={Results} /> 

      </Drawer.Navigator>
    </NavigationContainer>
  );
}