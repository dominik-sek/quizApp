import React, { useEffect } from 'react';
import { View, Text,StyleSheet, } from 'react-native';
import * as Progress from 'react-native-progress';

import { Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import Answer from './Answer';
const tasks = [
    {
        "question": "What is the capital of India?",
        "options": [
            {
                "option": "New Delhi",
                "isCorrect": true
            },
            {
                "option": "Mumbai",
                "isCorrect": false
            },
            {
                "option": "Chennai",
                "isCorrect": false
            },
            {
                "option": "Kolkata",
                "isCorrect": false
            }
        ]

    },
        {
            "question": "What is the capital of UK?",
            "options": [
                {
                    "option": "New Delhi",
                    "isCorrect": false
                },
                {
                    "option": "Mumbai",
                    "isCorrect": true
                },
                {
                    "option": "Chennai",
                    "isCorrect": false
                },
                {
                    "option": "Kolkata",
                    "isCorrect": false
                }
            ]
    
        },
        {
            "question": "What is the capital of China?",
            "options": [
                {
                    "option": "New Delhi",
                    "isCorrect": false
                },
                {
                    "option": "Mumbai",
                    "isCorrect": true
                },
                {
                    "option": "Chennai",
                    "isCorrect": false
                },
                {
                    "option": "Kolkata",
                    "isCorrect": false
                }
            ]
    
        },
        {
            "question": "What is the capital of Australia?",
            "options": [
                {
                    "option": "New Delhi",
                    "isCorrect": false
                },
                {
                    "option": "Mumbai",
                    "isCorrect": false
                },
                {
                    "option": "Chennai",
                    "isCorrect": false
                },
                {
                    "option": "Kolkata",
                    "isCorrect": true
                }
            ]
    
        }

]
//accept tasks as props
export default function Test({navigation}) {
    

    const [progressBar, setProgressBar] = React.useState(0);
    useEffect(() => {
        const Interval = setInterval(() => {
            setProgressBar((prev)=>{
                if(prev >= 1.2){
                    clearInterval(Interval);
                    return 1;
                }else{
                    return prev + 0.01;
                }
            });
        },1000);
        return () => clearInterval(Interval);
    }, []);

    const[content,setContent] = React.useState(0);

    const isOverTime = () => {
        if(progressBar === 1 && content < tasks.length - 1) {
            setContent(content+1);
        }
    }
    
    const handleQuestionChange =()=>{
        if(content < tasks.length -1){
            setContent(content+1);
        }

        if(content === tasks.length -1){
            navigation.navigate('Result');
        }
    }
    const [score,setScore] = React.useState(0);

    const handleAnswer = (isCorrect) => {
        if(isCorrect){
            setScore(score+1);
        }
    }
    

    return(
    // use tasks list to render questions
        
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <Progress.Bar progress={progressBar} width={300} />
            </View>
            <View style={styles.question}>
                {isOverTime()}
                <Text style={styles.questionText}>{tasks[content].question}</Text>
            </View>
            
            <View style={styles.answers}>
                <FlatList
                    data={tasks[content].options}
                    renderItem={({item}) => <Answer onPress={()=>{handleAnswer(item.isCorrect) }} Key={item.option} content={item.option} />}
                    keyExtractor={(item) => item.option}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title={content === tasks.length - 1 ? "Finish" : "Next"}
                    onPress={
                        content === tasks.length - 1 ? () => console.log(score) : handleQuestionChange
                    }
                    buttonStyle={{
                        backgroundColor: '#00b894',
                        width: '100%',
                        height: 50,
                        borderRadius: 25,
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                    titleStyle={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#fff',
                    }}
                />

                

            </View>
        </View>


            
    );
}


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
