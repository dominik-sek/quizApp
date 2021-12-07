import React from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FlatList } from 'react-native-gesture-handler';
const results = [
    {
        "nickname": "Bobby",
        "score": "100",
        "total": "100",
        "type": "historia",
        "date": "12/12/2019"
    },
    {
        "nickname": "adam",
        "score": "100",
        "total": "100",
        "type": "historia",
        "date": "12/12/2019"
    },
    {
        "nickname": "aksd",
        "score": "100",
        "total": "100",
        "type": "historia",
        "date": "12/12/2019"
    }
]


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Results({ navigation, route }) {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    console.log("route params: "+route.params?.score)
    results.push({
        "nickname": route.params?.nickname,
        "score": route.params?.score,
        "total": route.params?.total,
        "type": route.params?.type,
        "date": route.params?.date
    })




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
                                <Col>
                                    <Text style={styles.text}>{item.nickname}</Text>
                                </Col>
                                <Col>
                                    <Text style={styles.text}>{item.score}</Text>

                                </Col>
                                <Col>
                                    <Text style={styles.text}>{item.total}</Text>
                                </Col>
                                <Col>
                                    <Text style={styles.text}>{item.type}</Text>
                                </Col>
                                <Col>
                                    <Text style={styles.text}>{item.date}</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </View>
                )}
                keyExtractor={item => item.nickname}
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
    }
});