import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

export default function Answer(params) {
        return(
            <TouchableOpacity>
                <Text style={styles.answer}>{params.answer}</Text>
            </TouchableOpacity>
        )
    
};
const styles = StyleSheet.create({
    answer:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        
    },
});

