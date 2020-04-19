import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'lightblue'}} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})
