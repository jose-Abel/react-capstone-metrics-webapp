import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classes from './Crypto.module.css';

const Crypto = ({ crypto }) => {
  const {
    id, image, name, symbol,
  } = crypto;

  const navigate = useNavigate();

  const handleClick = () => {
    const path = `/details/${id}`;
    navigate(path);
  };

  return (
    <div
      className={classes.crypto}
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
};

export default Crypto;
