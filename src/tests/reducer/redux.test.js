import reducer from '../../redux/cryptos/cryptos';
import cryptos from '../fixtures/cryptos';

test('should setup default filter state', () => {
  const state = reducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('reducers', () => {
  const state = reducer([], { type: 'react-capstone-metrics-webapp/cryptos/GET_CRYPTOS_LIST_SUCCESS', payload: cryptos });
  expect(state).toEqual(cryptos);
});
