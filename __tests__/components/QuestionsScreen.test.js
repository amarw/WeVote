import 'react-native';
import React from 'react';
import QuestionsScreen from '../../src/components/QuestionsScreen';

// Note: test renderer must be required after react-native.
import { render } from 'react-native-testing-library';

describe('<QuestionsScreen />', () => {
    it('renders correctly.', () => {
        const { getByTestId, queryAllByTestId } = render(<QuestionsScreen />);
        const header = getByTestId('question_screen_header')
        const list = getByTestId('questions_list');
        expect(getByTestId('questions_list')).toBe(list);
        expect(getByTestId('question_screen_header')).toBe(header);
        expect(queryAllByTestId('question_list_item')).toHaveLength(0);
    });
});
