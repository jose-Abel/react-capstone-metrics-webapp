import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../../../components/filter/InputFilter';

describe('Complete functionality', () => {
  test('Type text in the InputFilter component in the HomePage component', () => {
    function hasInputValue(e, inputValue) {
      return screen.getByDisplayValue(inputValue) === e;
    }

    render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );

    const input = document.querySelector('.inputForm');

    fireEvent.change(input, { target: { value: 'Bitcoin' } });
    expect(hasInputValue(input, 'Bitcoin')).toBe(true);
  });
});
