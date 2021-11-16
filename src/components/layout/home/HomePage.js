import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptosList } from '../../../redux/cryptos/cryptos';
import Crypto from '../../crypto/Crypto';
import InputFilter from '../../filter/InputFilter';
import Header from '../header/Header';
import classes from './HomePage.module.css';

const HomePage = () => {
  const cryptos = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const loading = async () => {
      await dispatch(getCryptosList());
    };

    if (cryptos.length === 0) {
      loading();
    }
  }, []);

  return (
    <>
      <Header />
      <InputFilter />
      <div className={classes.cryptos}>
        {cryptos.map((crypto, index) => (
          <Crypto key={crypto.id} crypto={crypto} index={index} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
