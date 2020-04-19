import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ProgressBar = ({ progress }) => (
    <View style={{ flex: 1 }}>
        <View style={styles.progressGrey}/>
        <View style={[{width: `${progress}%`}, styles.progressColor]}/>
    </View>
)

export default ({choice, votes, percentage, selected, onSelect, ...otherProps }) => (
        <TouchableOpacity
            activeOpacity={1.0}
            style={{ backgroundColor: selected ? 'lightgreen' : 'white' }}
            onPress={onSelect}
        >
            <View {...otherProps} style={styles.container}>
                <Text numberOfLines={2} style={[{flex: 2}, styles.choiceTitle]}>{choice}</Text>
                <Text style={[{flex: 1 }, styles.choiceTitle]}>{votes}</Text>
                <Text style={[{flex: 1 }, styles.choiceTitle]}>{percentage.toString()}</Text>
                <ProgressBar progress={percentage} />
            </View>
        </TouchableOpacity>
    );

const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 24,
        marginVertical: 10
    },
    choiceTitle: {
        fontSize: 18,
        color: 'black',
        fontWeight: '200',
    },
    progressColor: {
        height: 20,
        backgroundColor: 'orange',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
    },
    progressGrey: {
        width: '100%',
        height: 20,
        backgroundColor: 'lightgrey'
    },
});
