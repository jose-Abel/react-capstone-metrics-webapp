import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptosList } from '../../../redux/cryptos/cryptos';
import Crypto from '../../crypto/Crypto';
import InputFilter from '../../filter/InputFilter';
import Header from '../header/Header';
import classes from './HomePage.module.css';

const HomePage = () => {
  const cryptos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searched, setSearched] = useState('');

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
      <InputFilter setSearched={setSearched} />
      <div className={classes.cryptos}>
        {cryptos.filter((crypto) => (
          crypto.name.toLowerCase().includes(searched))).map((crypto) => (
            <Crypto key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
