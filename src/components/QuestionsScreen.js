import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FlatGrid } from 'react-native-super-grid';
import moment from 'moment';

import apiClient from '../api/ApiClient';
import Header from './Header';
import ListItemView, { SIZE } from './ListItemView';

export default ({ navigation }) => {
    const [questions, setQuestions] = React.useState([]);
    const [nextPage, setNextPage] = React.useState('/questions');
    const [refresh, setRefresh] = React.useState(false);
    React.useEffect(() => {
        getQuestions(nextPage);
    }, []);

    const getQuestions = async (url) => {
        const { data, headers } = await apiClient.get(url);
        if (data && headers) {
            if (headers.Link) {
                const parts = headers.Link.splice(';');
                const rel = parts && parts.length > 1 && parts[1];
                if (rel.endsWith('next')) {
                    setNextPage(parts[0].replace(/[<>]/gi, '')) // remove <> surrounding the link
                } else {
                    setNextPage('');
                }
            }
            setQuestions(data);
        }
        setRefresh(false);
    }

    const onRefresh = async () => {
        setRefresh(true);
        await getQuestions(nextPage);
    }

    const keyExtractor = (item, index) => item.question + index;

    const renderQuestion = ({ item: { question, published_at, choices, url } }) => {
        const formatted = moment(published_at).format('Do MMM YYYY');
        const onClick = () => {
            // alert(question);
            navigation.navigate('QuestionDetailScreen', { url, question });
        }
        return (
            <ListItemView
                question={question}
                choiceCount={choices.length}
                date={formatted}
                onPress={onClick}
            />
        )
    }

    const onClickAddQuestion = () => {
        const onSuccess = (question) => {
            if (question) {
                setQuestions([question, ...questions])
            }
        };
        navigation.navigate('AddQuestionScreen', { onSuccess });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatGrid
                keyExtractor={keyExtractor}
                itemDimension={SIZE}
                spacing={16}
                items={questions}
                renderItem={renderQuestion}
                ListHeaderComponent={<Header title="Questions" showButton onButtonPress={onClickAddQuestion} />}
                refreshing={refresh}
                onRefresh={onRefresh}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})
