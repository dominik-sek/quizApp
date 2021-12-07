import { stubFalse } from 'lodash';
import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';
import Test from './Test';

export default function Answer(params) {
    const [selected,setSelected] = React.useState(false);

    const onSelect = (selected) => {
        params.onPress();
        setSelected(selected);
    }

        return(
            <TouchableOpacity key={params.Key} onPress={()=>{onSelect(!selected)}} style={styles.container}  >
                <Text style={selected ? styles.selected : styles.answer} >{params.content}</Text>
            </TouchableOpacity>
        )
    
};
const styles = StyleSheet.create({
    container:{
        flex:1,
 
    }
});

