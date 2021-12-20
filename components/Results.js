import React from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FlatList } from 'react-native-gesture-handler';


let results =[];
const getResults = async () => {
  try{
      const response = await fetch('https://tgryl.pl/quiz/results');
      const json = await response.json();
      return json;
  }catch(error){
      console.error(error);
  }
}

 getResults().then(data => {
    results = data;
  });

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Results({ navigation, route }) {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        console.log('refreshing');
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);
    
    //clear params
    //TODO: restart the test after hitting finish button

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <Grid>
                <Row>
                    <Col>
                        <Text style={styles.text}>nickname</Text>
                    </Col>
                    <Col>
                        <Text style={styles.text}>score</Text>
                    </Col>
                    <Col>
                        <Text style={styles.text}>total</Text>
                    </Col>
                    <Col>
                        <Text style={styles.text}>type</Text>
                    </Col>
                    <Col>
                        <Text style={styles.text}>date</Text>
                    </Col>
                </Row>
            </Grid>
            <FlatList

                data={results}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Grid>
                            <Row>
                                <Col style={styles.col} >
                                    <Text style={styles.text}>{item.nick}</Text>
                                </Col>
                                <Col style={styles.col}>
                                  <Text style={styles.text}>{item.score}</Text>
                                </Col>
                                <Col style={styles.col}>
                                    <Text style={styles.text}>{item.total}</Text>
                                </Col>
                                <Col style={styles.col}>
                                    <Text style={styles.text}>{item.type}</Text>
                                </Col>
                                <Col style={styles.col}>
                                    <Text style={styles.text}>{item.createdOn}</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ddd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    col: {
        flex: 1,
        backgroundColor: '#0066ff',
    },
    text:{
        fontSize:15,
        alignSelf:'center',
    }
});