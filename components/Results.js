import React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default function Results({ navigation }) {


    return (
        <ScrollView>
            <Grid>
                <Col size={25} style={styles.col}>
                    <Row style={styles.cell}>
                        <Text>COL1</Text>
                    </Row>
                    
                </Col>
                <Col size={25}style={styles.col}>
                    <Row style={styles.cell}>
                        <Text>COL2</Text>
                    </Row>
                    
                </Col>
                <Col size={25} style={styles.col}>
                    <Row style={styles.cell}>
                        <Text>COL3</Text>
                    </Row>
                


                </Col>

            </Grid>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 300,
      padding: 16,
      paddingTop: 100,
      backgroundColor: '#fff',
    },
    cell: {
      borderWidth: 1,
      borderColor: '#ddd',
      
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    col:{
        flex: 1,
        backgroundColor: '#0066ff',
    }
  });