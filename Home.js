import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './components/MainScreen';
import Results from './components/Results';
import Test from './components/Test';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const quiz = [
  {
    id: '1',
    name: 'Test 1',
    description: 'description 1',
    tags: ['#tag1', '#tag2', '#tag3']
  },
  {
    id: '2',
    name: 'Test 2',
    description: 'description 2',
    tags: ['#tag1', '#tag2', '#tag3']

  },
  {
    id: '3',
    name: 'Test 3',
    description: 'description 3',
    tags: ['#tag1', '#tag2', '#tag3']

  },
  {
      id: '4',
      name: 'Test 4',
      description: 'description 4',
      tags: ['#tag1', '#tag2', '#tag3']

  },
  {
      id: '5',
      name: 'Test 5',
      description: 'description 5',
      tags: ['#tag1', '#tag2', '#tag3']

  },
  {
      id: '6',
      name: 'Test 6',
      description: 'despriction 6',
      tags: ['#tag1', '#tag2', '#tag3']

  }

];


export default function App() {
  
  return (
<NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainScreen} initialParams={{DATA:quiz}}/>
      <Drawer.Screen name="Results" component={Results} /> 
      {
        quiz.map(quiz => <Drawer.Screen name={quiz.name} component={Test} initialParams={{testId: quiz.id}} />)
      }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}