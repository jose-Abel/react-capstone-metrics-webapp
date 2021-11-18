import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Header from '../../../components/layout/header/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  test('renders Header component correctly', () => {
    const tree = render(<Provider store={store}><Router><Header /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('find text in the Header component DOM', () => {
    render(<Provider store={store}><Router><Header /></Router></Provider>);

    expect(screen.getByText(/Metrics Web App/)).toBeInTheDocument();
  });
});
