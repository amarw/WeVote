import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Divider = () => <View style={styles.divider} />

export default ({ title, style, titleStyle, showButton, onButtonPress, ...otherProps }) => (
    <View {...otherProps} style={[{ marginBottom: 16 }, style]} >
        <Text style={[styles.header, titleStyle]}>{title}</Text>
        <Divider />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 24,
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
    divider: {
        marginHorizontal: 10,
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightgrey',
    },
})
