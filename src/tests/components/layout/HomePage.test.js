import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import HomePage from '../../../components/layout/home/HomePage';
import '@testing-library/jest-dom/extend-expect';

describe('HomePage', () => {
  test('renders HomePage component correctly', () => {
    const tree = render(<Provider store={store}><Router><HomePage /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('find text in the HomePage component DOM', () => {
    render(<Provider store={store}><Router><HomePage /></Router></Provider>);

    expect(screen.getByText(/Metrics Web App/)).toBeInTheDocument();
  });
});
