import React from 'react';
import { Text, View, FlatList, StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Results from './Results';
import { map } from 'lodash';

//https://tgryl.pl/quiz/tests


const Item = ({ id,name,description,tags, navigation }) => (
    <View style={styles.drawer} >
        <TouchableOpacity onPress={()=>{navigation.navigate("Test "+id,{testId:id})} }>{/* onPress navigate to the following test */}
        <Text style={{fontSize:30}}>{name}</Text>
        <View style={{display:'flex', justifyContent:'flex-start', flexDirection:'row'}}>
       {
              map(tags, (tag)=>{
                return <Text key={tag} style={{fontSize:15, padding:5}}>{tag}</Text>
              })
       }
       </View>
        <Text>
            {description}
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
    let DATA = params.route.params.DATA;
    const renderItem = ({ item }) => (
        //id,name,description,tags,
        <Item key={item.id} id={item.id} name={item.name} description={item.description} tags={item.tags} number={item.number} navigation={params.navigation} />
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
