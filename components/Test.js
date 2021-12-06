import React, { useEffect } from 'react';
import { View, Text,StyleSheet, } from 'react-native';
import * as Progress from 'react-native-progress';

import { Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import Answer from './Answer';


export default function Test({navigation, content}) {
    /*  
    content ={
        title: 'test3',
        questions:[
            {
                question: 'question1',
                answers: [
                    {
                        answer: 'answer1',
                        correct: true
                    },
                    {
                        answer: 'answer2',
                        correct: false
                    },
                    {
                        answer: 'answer3',
                        correct: false
                    }
        ]
    }


    */

    const [progressBar, setProgressBar] = React.useState(0);
    useEffect(() => {
        const Interval = setInterval(() => {
            setProgressBar((prev)=>{
                if(prev >= 1.2){
                    clearInterval(Interval);
                    return 1.120;
                }else{
                    return prev + 0.01;
                }
            });
        },1000);
        return () => clearInterval(Interval);
    }, []);



    return(
        
            
                <View style={styles.container}>
                    <Text style={styles.header}>Test number 69</Text>
                    <View >
                        <Text >
                        Anim magna laboris nisi mollit qui dolore id. Occaecat proident ipsum enim ea. Eu minim reprehenderit et eu et pariatur do. Irure fugiat sunt sint dolor minim. Sit consequat laboris ullamco magna. Sunt dolore id consequat dolore sint et sit aliqua. Pariatur occaecat occaecat occaecat consectetur irure adipisicing elit veniam ex velit exercitation cillum magna.                    

                        </Text>
                        <Progress.Bar style={{margin: 20}} progress={progressBar} width={null} />
                        <View style={styles.answers}>
                            
                            {/* loop through possible answers */}
                            <Answer answer={"answer1"}/>
                            <Answer answer={"answer2"}/>
                            <Answer answer={"answer3"}/>
                            <Answer answer={"answer4"}/>
                        </View>
                    </View>
                </View>
            
       
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        top:0,
    },
    answers:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#000',
        padding: 20,
    },
    

});
