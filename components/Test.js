import React, { useEffect } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Touchable, } from 'react-native';
import * as Progress from 'react-native-progress';

import { Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
//https://tgryl.pl/quiz/test/61316f7f99149c1a92250e46

const quiz1tasks = [
    {
        "question": "What is the capital of India?",
        "options": [
            {
                "option": "1",
                "isCorrect": true
            },
            {
                "option": "2",
                "isCorrect": false
            },
            {
                "option": "3",
                "isCorrect": false
            },
            {
                "option": "4",
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
                    "option": "2",
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
                    "option": "3",
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
                    "option": "4",
                    "isCorrect": true
                }
            ]
    
        },
        

]
const quiz2tasks = [
    {
        "question": "What is the capital of India?",
        "options": [
            {
                "option": "5",
                "isCorrect": true
            },
            {
                "option": "6",
                "isCorrect": false
            },
            {
                "option": "7",
                "isCorrect": false
            },
            {
                "option": "8",
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
                    "option": "2",
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
                    "option": "3",
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
                    "option": "4",
                    "isCorrect": true
                }
            ]
    
        },
        

]
const quiz3tasks = [
    {
        "question": "What is the capital of India?",
        "options": [
            {
                "option": "1",
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
                    "option": "2",
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
                    "option": "3",
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
                    "option": "4",
                    "isCorrect": true
                }
            ]
    
        },
        

]
const quiz4tasks = [
    {
        "question": "What is the capital of India?",
        "options": [
            {
                "option": "1",
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
                    "option": "2",
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
                    "option": "3",
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
                    "option": "4",
                    "isCorrect": true
                }
            ]
    
        },
        

]
const Quizes ={
    "1": quiz1tasks,
    "2": quiz2tasks,
    "3": quiz3tasks,
    "4": quiz4tasks
};

const fetchTasks = async (testId) => {
    try{
        const response = await fetch('https://tgryl.pl/quiz/test/'+testId);
        const json = await response.json();
        return json;
    }catch(error){
        console.log(error);
    }
}

export default function Test({route, navigation}) {
    const [tasks, setTasks] = React.useState([]);
    setTasks(fetchTasks(route.params.testId).then(data => data.tasks));


    
    console.log("fetched: "+tasks[0].question)

    const [progressBar, setProgressBar] = React.useState(0);
    useEffect(() => {
        const Interval = setInterval(() => {
            setProgressBar((prev)=>{
                if(prev === null){
                    clearInterval(Interval);
                    console.log("cleared");
                }

                if(prev >= 1){
                    console.log("interval hit 1.2")
                    clearInterval(Interval);
                    return 1;
                }else{
                    console.log("interval 0.2")
                    return prev + 0.2;
                }
                
            });
        },1000);
        return () => clearInterval(Interval), console.log("interval cleared");
    }, []);

    const[content,setContent] = React.useState(0);

    const isOverTime = () => {
        
        if(progressBar === 1 && content <= tasks.length - 1) {
            handleQuestionChange(score)
        }
    }
  
   
    const [score,setScore] = React.useState(0);
    const [userAnswer,setUserAnswer] = React.useState(null);
    const [isCorrect,setIsCorrect] = React.useState({
        userAnswer: null,
        correctAnswer: null
    });


    const handleUserAnswer = (option, isCorrect) => {
        setUserAnswer(option);
        setIsCorrect({
            userAnswer: option,
            correctAnswer: isCorrect});
    }

    const validateAnswer =()=>{
        if(isCorrect.correctAnswer){
            setScore(score+1);
            
            }
            setUserAnswer(null);
            setIsCorrect({
            userAnswer: null,
            correctAnswer: null
        });
        
        setUserAnswer(null);
        setIsCorrect({
            userAnswer: null,
            correctAnswer: null
        });
    }
    const handleQuestionChange = ()=>{
        setProgressBar(0);

        if(content < tasks.length -1){
            validateAnswer();
            setContent(content+1);
        }
        if(content === tasks.length - 1){
            setProgressBar(null)
            showResults();
        }
    }

    const showResults =  () => {
        setScore((score)=>{
                navigation.navigate('Results',{
                nickname: 'tester',
                score: score,
                total: score,
                type : 'TestType',
                date: '01/01/2000'
            });
        })
    }

    return(

        
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <Progress.Bar progress={progressBar} width={300} />
                {isOverTime()}
            </View>
            <View style={styles.question}>
                <Text style={styles.questionText}>{tasks[content].question}</Text>
            </View>
            
            <View style={styles.answers}>
                <FlatList
                    data={tasks[content].answers}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={()=>{handleUserAnswer(item.option,item.isCorrect) }} style={item.option === userAnswer ? styles.selected : styles.unselected}>
                            <Text>{item.option}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.option}
                />
                
            </View>
            <View style={styles.button}>
                <Button
                    title={content === tasks.length - 1 ? "Finish" : "Next"}
                    onPress={()=>handleQuestionChange(score)}
                    
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
    
    selected:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor:'#00ff00',
    },
    unselected:{
        fontSize: 20,
        backgroundColor:'#ffffff',
        fontWeight: 'bold',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center'
    },
    

});
