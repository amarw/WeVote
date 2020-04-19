import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const SIZE = 162;

export default ({ question, date, choiceCount, onPress }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{question}</Text>
            <View>
                <Text style={styles.itemDetail}>{date}</Text>
                <Text style={styles.itemDetail}>Choices: {choiceCount}</Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    item: {
        width: SIZE,
        height: SIZE,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    itemDetail: {
        fontSize: 14,
        color: 'grey',
    }
})
