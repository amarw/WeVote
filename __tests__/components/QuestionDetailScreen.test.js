import 'react-native';
import React from 'react';
import QuestionDetailScreen from "../../src/components/QuestionDetailScreen";

// Note: test renderer must be required after react-native.
import { render } from 'react-native-testing-library';

describe('<QuestionDetailScreen />', () => {
    it('renders correctly.', () => {
        const navigation = { getParam: () => 'abc' }
        const { getByTestId } = render(<QuestionDetailScreen navigation={navigation} />);
        const header = getByTestId('question_detail_header')
        const list = getByTestId('question_detail_list');
        expect(getByTestId('question_detail_list')).toBe(list);
        expect(getByTestId('question_detail_header')).toBe(header);
    });
});
