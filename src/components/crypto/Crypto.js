import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classes from './Crypto.module.css';

const Crypto = ({ crypto, index }) => {
  const {
    id, image, name, symbol,
  } = crypto;

  const navigate = useNavigate();

  let backgroundDynamic = classes.lighterBlue;
  if (index % 2 === 0) {
    backgroundDynamic = classes.darkerBlue;
  }

  const handleClick = () => {
    const path = `/details/${id}`;
    navigate(path);
  };

  return (
    <div
      className={`${classes.crypto} ${backgroundDynamic}`}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
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
    id: '',
    symbol: '',
    name: '',
    image: '',
  },
};

Crypto.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  index: PropTypes.number,
};

export default Crypto;
