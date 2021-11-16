import React from 'react';
import PropTypes from 'prop-types';
import classes from './Crypto.module.css';

const Crypto = ({ crypto, index }) => {
  const { image, name, symbol } = crypto;

  let backgroundDynamic = classes.lighterBlue;
  if (index % 2 === 0) {
    backgroundDynamic = classes.darkerBlue;
  }

  return (
    <div className={`${classes.crypto} ${backgroundDynamic}`}>
      <img src={image} className={classes.cryptoImage} alt={name} />
      <p>
        Symbol:&nbsp;
        {symbol}
      </p>
      <p>
        Name:&nbsp;
        {name}
      </p>
    </div>
  );
};

Crypto.defaultProps = {
  index: 0,
  crypto: {
    symbol: '',
    name: '',
    image: '',
  },
};

Crypto.propTypes = {
  crypto: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  index: PropTypes.number,
};

export default Crypto;
