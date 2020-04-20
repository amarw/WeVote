import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import { render } from 'react-native-testing-library';


describe('<App />', () => {
  it('should have 1 child component', () => {
    const app = render(<App />);
    expect(app.toJSON().children.length).toBe(1);
  });
  it('should have main app navigator', () => {
    const { getByTestId } = render(<App />);
    const navigator = getByTestId('app_navigator');
    expect(getByTestId('app_navigator')).toBe(navigator);
  });
});
