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
        <img src={crypto.image} alt={crypto.name} className={classes.detailsImage} />
        <p>
          {crypto.name}
        </p>
      </header>
      <div className={classes.card}>
        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            All Time High:
          </span>
          {' '}
          {crypto.ath}
        </p>
        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            All Time High Change Percentage:
          </span>
          {' '}
          {crypto.ath_change_percentage}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Circulating Supply:
          </span>
          {' '}
          {crypto.circulating_supply}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Current Price:
          </span>
          {' '}
          {crypto.current_price}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Highest Price last 24 hours:
          </span>
          {' '}
          {crypto.high_24h}
        </p>

        <p className={classes.rowContainer}>
          <span className={classes.rowText}>
            Lowest Price last 24 hours:
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
