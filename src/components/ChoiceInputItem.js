import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default ({ onChangeText, value, onClickRemoveChoice, title }) => (
    <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderTitle}>{title}</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Type your choice here"
            clearButtonMode="always"
            onChangeText={onChangeText}
            value={value}
        />
        <TouchableOpacity onPress={onClickRemoveChoice}>
            <Text style={styles.buttonTitle}>Remove Choice</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    sectionHeaderContainer: {
        margin: 24
    },
    sectionHeaderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    textInput: {
        borderColor: 'lightgrey',
        borderBottomWidth: 1,
        height: 35,
        marginVertical: 10,
        fontSize: 16,
        color: 'black',
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
})
