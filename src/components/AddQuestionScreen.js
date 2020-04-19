import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from "./Header";
import Button from "./Button";

export default ({ navigation }) => {
    const renderFooterView = () => (
        <View style={styles.footerContainer}>
            <Button title="Cancel" onPress={() => navigation.goBack()} />
            <Button title="Add" onPress={() => {}} />
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Add Question"/>
            <FlatList
                containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                ListFooterComponent={renderFooterView}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footerContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 16
    },
})
