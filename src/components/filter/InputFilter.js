import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './InputFilter.module.css';

const InputFilter = ({ setSearched }) => {
  const [searchCrypto, setSearchCrypto] = useState('');

  const changeInput = (e) => {
    e.preventDefault();
    setSearchCrypto(e.target.value.toLowerCase());
    setSearched(e.target.value.toLowerCase());
  };

  return (
    <form className={classes.form}>
      <input value={searchCrypto} onChange={changeInput} className={classes.inputForm} placeholder="Search Crypto" />
    </form>
  );
};

InputFilter.defaultProps = {
  setSearched() {},
};

InputFilter.propTypes = {
  setSearched: PropTypes.func,
};

export default InputFilter;
