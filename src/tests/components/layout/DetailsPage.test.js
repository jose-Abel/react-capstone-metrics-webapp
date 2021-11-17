/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { render, screen } from '@testing-library/react';
import * as Redux from 'react-redux';
import * as RouterDOM from 'react-router-dom';
import store from '../../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import DetailsPage from '../../../components/layout/details/DetailsPage';
import cryptos from '../../fixtures/cryptos';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('DetailsPage', () => {
  const useParamsMock = RouterDOM.useParams;
  const useSelectorMock = Redux.useSelector;

  beforeEach(() => {
    useParamsMock.mockImplementation(() => ({ id: cryptos[0].id }));
    useSelectorMock.mockImplementation((selector) => selector(cryptos));
  });

  test('renders DetailsPage component correctly', () => {
    const tree = render(
      <Redux.Provider store={store}>
        <RouterDOM.BrowserRouter>
          <DetailsPage />
        </RouterDOM.BrowserRouter>
      </Redux.Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('find text in the DetailsPage component DOM', () => {
    render(
      <Redux.Provider store={store}>
        <RouterDOM.BrowserRouter>
          <DetailsPage />
        </RouterDOM.BrowserRouter>
      </Redux.Provider>,
    );

    expect(screen.getByText(/All Time High:/)).toBeInTheDocument();
  });
});
