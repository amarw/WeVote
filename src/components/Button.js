import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({ disabled, onPress, title, ...buttonProps }) => (
    <TouchableOpacity {...buttonProps} disabled={disabled} style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonTitle, { color: disabled ? 'lightgrey' : 'black'}]}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flex: 1,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 25,
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
})
