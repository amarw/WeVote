import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

import Header from "./Header";
import ChoiceInputItem from "./ChoiceInputItem";
import Button from "./Button";
import apiClient from "../api/ApiClient";

export default ({ navigation }) => {
    const [question, setQuestion] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);
    const [choices, setChoices] = React.useState([]);
    const [lookup, setLookup] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    React.useEffect(() => {
        const isValidQuestion = question && question.length > 0;
        const isValidChoices = choices.length >= 2 && choices.every(id => lookup[id].length > 0);
        setIsValid(isValidQuestion && isValidChoices);
    }, [question, choices, lookup])

    const addQuestionWithChoices = async (url, payload) => {
        setIsSubmitting(true)
        const { data } = await apiClient.post(url, payload);
        if (data) {
            const onSuccess = navigation.getParam('onSuccess', null);
            if (onSuccess) {
                onSuccess(data);
            }
            setIsSubmitting(false);
            navigation.goBack();
        }
    }

    const onClickSubmit = async () => {
        const payload = { question, choices: choices.map(id => lookup[id])};
        await addQuestionWithChoices('/questions', payload);
    }

    const onClickAddChoice = () => {
        const id = new Date().getUTCMilliseconds(); // unique-ish
        setLookup({...lookup, [`${id}`]: '' });
        setChoices([...choices, id]);
    }

    const renderHeaderView = (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderTitle}>Question</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Type your question here"
                clearButtonMode="always"
                onChangeText={(text) => setQuestion(text)}
                value={question}
            />
            <TouchableOpacity style={{ marginBottom: 10 }} onPress={onClickAddChoice}>
                <Text style={styles.buttonTitle}>Add Choice</Text>
            </TouchableOpacity>
        </View>
    )

    const renderFooterView = () => (
        <View style={styles.footerContainer}>
            <Button title="Cancel" onPress={() => navigation.goBack()} />
            <Button title="Add" onPress={onClickSubmit} disabled={!isValid} />
        </View>
    )

    const renderChoiceInputItem = ({ item, index }) => {
        const onClickRemoveChoice = () => {
            const updatedChoices = [...choices];
            updatedChoices.splice(index, 1);
            setChoices(updatedChoices);
        }
        const onChangeText = (text) => {
            setLookup({
                ...lookup,
                [`${item}`]: text
            });
        }
        return (
            <ChoiceInputItem
                value={lookup[item]}
                title={`Choice ${index + 1}`}
                onChangeText={onChangeText}
                onClickRemoveChoice={onClickRemoveChoice}
            />
        )
    }
    const keyExtractor = (item) => item.toString();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Add Question"/>
            <KeyboardAwareFlatList
                data={choices}
                keyExtractor={keyExtractor}
                renderItem={renderChoiceInputItem}
                containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                ListHeaderComponent={renderHeaderView}
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
    footerContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 16
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
})
