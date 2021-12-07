import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './components/MainScreen';
import Results from './components/Results';
import Test from './components/Test';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
import SplashScreen from 'react-native-splash-screen';
import { values } from 'lodash';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Drawer = createDrawerNavigator();

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if (value !== null) {
      setNavigateTo('Home')
      return value
    }
  } catch (e) {
    // error reading value
  }
}




export default function App() {

  const [checkboxState, setCheckboxState] = React.useState(false);
  const [navigateTo, setNavigateTo] = React.useState('');


  const checkboxHandler = (value) => {
    setCheckboxState(value);
  }

  
  getData();
  if (navigateTo === 'Home') {
    return (
      <Home />
    )
  }

  
  else {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ marginTop: 50, paddingLeft: 10 }}>terms of service for first time users:</Text>
        <Text style={{ padding: 20 }}>
          Nisi aliqua in laboris exercitation ullamco veniam enim consectetur duis veniam fugiat dolor voluptate. Deserunt excepteur ad est occaecat id tempor irure cillum aute officia proident esse. Elit sunt cillum aliquip anim culpa. Ex Lorem consequat elit laborum laboris commodo irure anim consequat minim enim in.
        </Text>
        <BouncyCheckbox
          style={{ padding: 20 }}
          size={25}
          fillColor="red"
          text="I agree to the terms of service"
          textStyle={{
            textDecorationLine: "none"
          }}
          iconStyle={{ borderColor: "red" }}
          isChecked={checkboxState}
          disableBuiltInState
          onPress={() => checkboxHandler(!checkboxState)}
        />

        {/* add nickanem texinput */}
        

        <TouchableOpacity
          style={{
            display: 'flex',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 30,
            justifyContent: 'center',
            backgroundColor: checkboxState ? '#0070ff' : 'gray'
          }}
          disabled={!checkboxState}

          onPress={() => {
            storeData('true');
            setNavigateTo('Home');

          }}
        >

          <Text style={{ padding: 20, textAlign: 'center' }}>Take me home</Text>
        </TouchableOpacity>

      </View>
    )
  }




}

