import React from 'react';
import { Text, View, FlatList, StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Results from './Results';
const DATA = [
    {
      id: '1',
        number: '1',
    },
    {
      id: '2',
        number: '2',
    },
    {
      id: '3',
        number: '3',
    },
    {
        id: '4',
        number: '4',
    },
    {
        id: '5',
        number: '5',
    },
    {
        id: '6',
        number: '6',
    }

  ];

function Test1 (navigation)  {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Test 1
                </Text>
            </View>
        </View>
    );
};

const Item = ({ number, navigation }) => (
    <View style={styles.drawer} >
        <TouchableOpacity onPress={()=>{navigation.navigate("Test")}}>{/* onPress navigate to the following test */}
        <Text style={{fontSize:30}}> Test no. {number}</Text>
        <Text>
            Aliquip minim deserunt excepteur mollit deserunt est elit. Laborum ex nisi ipsum tempor voluptate et nisi commodo excepteur enim. Lorem tempor Lorem aliqua pariatur eu occaecat laborum laboris duis sunt magna laborum incididunt. Exercitation commodo deserunt nisi Lorem dolor dolore. Ad reprehenderit magna nostrud dolore do non proident est esse occaecat irure incididunt. Cillum laborum sit ad enim consectetur velit aliquip mollit aute fugiat.
       </Text>
       </TouchableOpacity> 
    </View>
);




function FloatingButton ({navigation}) {

        return(
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Results") } style={styles.showResults} >
                <Ionicons name="arrow-undo-outline" size={32} color="white" />
            </TouchableOpacity>
            </View>
        )

}



export default function MainScreen(params) {

    const renderItem = ({ item }) => (
        <Item number={item.number} navigation={params.navigation} />
    );



    return(
        <>
            <SafeAreaView style={styles.container}>
            
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    /> 
                
            </SafeAreaView>
            <FloatingButton navigation={params.navigation}/>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    },

    drawer:{
        flex: 0.5,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
  
    },
    showResults:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#0088ff',
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 20,
        paddingVertical:20,
        

    }
  });
