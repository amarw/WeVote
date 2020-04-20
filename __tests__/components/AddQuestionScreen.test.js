import 'react-native';
import React from 'react';
import AddQuestionScreen from "../../src/components/AddQuestionScreen";

// Note: test renderer must be required after react-native.
import { render } from 'react-native-testing-library';

describe('<AddQuestionScreen />', () => {
    it('renders correctly.', () => {
        const { getByTestId } = render(<AddQuestionScreen />);
        const header = getByTestId('add_question_screen_header')
        const list = getByTestId('add_question_list');
        expect(getByTestId('add_question_list')).toBe(list);
        expect(getByTestId('add_question_screen_header')).toBe(header);
    });
});
