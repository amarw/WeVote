import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QuestionsScreen from '../components/QuestionsScreen';
import QuestionDetailScreen from '../components/QuestionDetailScreen';
import AddQuestionScreen from '../components/AddQuestionScreen';

const AppNavigtor = createStackNavigator({
    QuestionsScreen,
    QuestionDetailScreen,
    AddQuestionScreen,
}, {
    initialRouteName: 'QuestionsScreen',
    mode: 'modal',
    headerMode: 'none',
});

export default createAppContainer(AppNavigtor);
