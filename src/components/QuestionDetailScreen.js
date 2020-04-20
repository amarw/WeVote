import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Header from './Header';
import ChoiceListItem from "./ChoiceListItem";
import Button from "./Button";
import apiClient from '../api/ApiClient';

export default ({ navigation }) => {
    const [question, setQuestion] = React.useState({});
    const [totalVotes, setTotalVotes] = React.useState(0);
    const [selectedChoice, setSelectedChoice] = React.useState(-1);
    React.useEffect(() => {
        const url = navigation.getParam('url')
        getQuestionWithId(url);
    }, []);
    React.useEffect(() => {
        if (question && question.choices) {
            const total = question.choices.reduce((acc, curr, index ) => curr.votes + acc, 0);
            setTotalVotes(total);
        }
        setSelectedChoice(-1); // reset selection if question was updated
    }, [question]);

    const getQuestionWithId = async (url) => {
        const { data } = await apiClient.get(url);
        if (data) {
            setQuestion(data);
        }
    }

    const postVoteWithChoice = async (url) => {
        const { data } = await apiClient.post(url);
        if (data) {
            const updatedChoices = [...question.choices];
            updatedChoices[selectedChoice] = data;
            setQuestion({...question, choices: updatedChoices })
        }
    }

    const renderChoiceItem = ({ item: { choice, votes }, index }) => {
        const percentage = totalVotes > 0 ? Math.floor((votes/totalVotes) * 100) : 0;
        const onSelectChoice = () => {
            if (index === selectedChoice) {
                setSelectedChoice(-1);
            } else {
                setSelectedChoice(index);
            }
        }
        return (
            <ChoiceListItem
                key={index}
                percentage={percentage}
                choice={choice}
                votes={votes}
                selected={selectedChoice >= 0 && selectedChoice === index}
                onSelect={onSelectChoice}
            />
        )
    }
    const keyExtractor = (item, index) => item.choice + index;

    const onClickVote = async () => {
        if (selectedChoice >= 0) {
            const { url } = question.choices[selectedChoice];
            await postVoteWithChoice(url);
        }
    }

    const renderHeaderView = () => (
        <View testID="question_detail_header" style={styles.headerViewContainer}>
            <Text style={[{ fontWeight: 'bold'}, styles.headerViewText]}>
                Question:
                <Text style={{ fontWeight: 'normal'}}> {questionTitle}</Text>
            </Text>
        </View>
    )

    const renderFooterView = () => (
        <View style={styles.footerContainer}>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Button title="Vote" onPress={onClickVote} disabled={selectedChoice === -1} />
        </View>
    )

    const questionTitle = navigation.getParam('question', '');
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Questions Detail" />
            <FlatList
                testID="question_detail_list"
                data={question.choices}
                numOfColumns={4}
                renderItem={renderChoiceItem}
                keyExtractor={keyExtractor}
                ListHeaderComponent={renderHeaderView}
                ListFooterComponent={renderFooterView}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    footerContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 16
    },
    headerViewContainer: {
        flexDirection: 'row',
        margin: 24
    },
    headerViewText: {
        fontSize: 18,
        color: 'black',
    },
})
