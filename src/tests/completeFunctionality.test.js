import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as Redux from 'react-redux';
// import * as Router from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../components/layout/home/HomePage';
import cryptos from './fixtures/cryptos';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(),
// }));

describe('Complete functionality', () => {
  const useSelectorMock = Redux.useSelector;
  const useDispatchMock = Redux.useDispatch;
  // const useNavigateMock = Router.useNavigate;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(cryptos));
    // useNavigateMock.mockImplementation(() => () => {});
  });

  test('Type text in the InputFilter component in the HomePage component', () => {
    // render(<HomePage />);
    render(
      <Redux.Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Redux.Provider>,
    );

    const input = document.querySelector('.inputForm');

    fireEvent.change(input, { target: { value: 'Bitcoin' } });

    // const cryptoCard = screen.queryByText(/^Symbol: btc$/);
    // console.log(cryptoCard);
    // fireEvent.click(cryptoCard);

    // expect(screen.getByText(/All Time High:/)).toBeInTheDocument();
  });
});
