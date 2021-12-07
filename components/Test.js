import React, { useEffect } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Touchable, } from 'react-native';
import * as Progress from 'react-native-progress';

import { Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
//accept tasks as props
export default function Test({navigation, tasks}) {
    

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
            
            
            setProgressBar(0);
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

        if(content < tasks.length -1){
            validateAnswer();
            setContent(content+1);
        }
        if(content === tasks.length - 1){
            validateAnswer();
            showResults();
        }
    }

    const showResults =  () => {
        setScore((score)=>{
                navigation.navigate('Results',{
                nickname: 'testNickname',
                score: score,
                total: score,
                type : 'TestType',
                date: '01/01/2000'
            });
        })
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
                <Text>{userAnswer}</Text>

                

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
