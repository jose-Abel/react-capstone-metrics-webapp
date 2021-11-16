import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './DetailsPage.module.css';

const DetailsPage = () => {
  const params = useParams();
  const cryptos = useSelector((state) => state);
  const crypto = cryptos.filter((cryp) => cryp.id === params.id)[0];

  const navigate = useNavigate();

  const handleClickIcon = () => {
    const path = '/home';
    navigate(path);
  };

  return (
    <section>
      <i
        className={`${'fas fa-arrow-circle-left'} ${classes.fontawesomeIcon}`}
        onClick={handleClickIcon}
        onKeyDown={handleClickIcon}
        role="button"
        tabIndex={0}
        aria-label="Back button"
      />
      <header className={classes.detailsHeader}>
        <img src={crypto.image} alt={crypto.name} />
        <p>
          {crypto.name}
        </p>
      </header>
      <div className={classes.card}>
        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            All Time High
          </span>
          {' '}
          {crypto.ath}
        </p>
        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            All Time High
          </span>
          {' '}
          {crypto.ath}
        </p>
        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            All Time High Change Percentage
          </span>
          {' '}
          {crypto.ath_change_percentage}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Circulating Supply
          </span>
          {' '}
          {crypto.circulating_supply}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Current Price
          </span>
          {' '}
          {crypto.current_price}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Highest Price last 24 hours
          </span>
          {' '}
          {crypto.high_24h}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Lowest Price last 24 hours
          </span>
          {' '}
          {crypto.low_24h}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Market Cap Rank:
          </span>
          {' '}
          {crypto.market_cap_rank}
        </p>

      </div>
    </section>
  );
};

export default DetailsPage;

/*
ath: 686.31
ath_change_percentage: -14.1262
ath_date: "2021-05-10T07:24:17.097Z"
atl: 0.0398177
atl_change_percentage: 1480039.68197
atl_date: "2017-10-19T00:00:00.000Z"
circulating_supply: 168137035.9
current_price: 587.97
fully_diluted_valuation: 98939660242
high_24h: 639.24
id: "binancecoin"
image: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615"
last_updated: "2021-11-16T22:04:43.927Z"
low_24h: 575.88
market_cap: 98939660242
market_cap_change_24h: -8245621072.922806
market_cap_change_percentage_24h: -7.69287
market_cap_rank: 3
max_supply: 168137035.9
name: "Binance Coin"
price_change_24h: -47.887937631762
price_change_percentage_24h: -7.53125
roi: null
symbol: "bnb"
total_supply: 168137035.9
total_volume: 2961108361

*/
