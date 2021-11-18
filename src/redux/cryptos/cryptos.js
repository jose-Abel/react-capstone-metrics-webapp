const GET_CRYPTOS_LIST_SUCCESS = 'react-capstone-metrics-webapp/cryptos/GET_CRYPTOS_LIST_SUCCESS';
const GET_CRYPTOS_LIST_FAILURE = 'react-capstone-metrics-webapp/cryptos/GET_CRYPTOS_LIST_FAILURE';

const initialState = [];

const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const getCryptosList = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseURL}`);
    const data = await response.json();

    dispatch({ type: GET_CRYPTOS_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_CRYPTOS_LIST_FAILURE, err });
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTOS_LIST_SUCCESS:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};
