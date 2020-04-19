import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QuestionsScreen from '../components/QuestionsScreen';

const AppNavigtor = createStackNavigator({
    QuestionsScreen,
}, {
    initialRouteName: 'QuestionsScreen',
    mode: 'modal',
    headerMode: 'none',
});

export default createAppContainer(AppNavigtor);
