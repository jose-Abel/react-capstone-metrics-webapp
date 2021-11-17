import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as RouterDOM from 'react-router-dom';
import store from '../../../redux/configureStore';
import Crypto from '../../../components/crypto/Crypto';
import '@testing-library/jest-dom/extend-expect';
import cryptos from '../../fixtures/cryptos';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Crypto', () => {
  const useNavigateMock = RouterDOM.useNavigate;

  beforeEach(() => {
    useNavigateMock.mockImplementation(() => () => {});
  });

  test('renders Crypto component correctly', () => {
    const tree = render(
      <Provider store={store}>
        <RouterDOM.BrowserRouter>
          <Crypto crypto={cryptos[0]} index={0} />
        </RouterDOM.BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test('find text in the Crypto component DOM', () => {
    render(
      <Provider store={store}>
        <RouterDOM.BrowserRouter>
          <Crypto crypto={cryptos[0]} index={0} />
        </RouterDOM.BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
  });
});
