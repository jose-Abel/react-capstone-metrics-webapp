import React from 'react';
import classes from './Header.module.css';

const Header = () => (
  <div className={classes.headerContainer}>
    <img
      src="/greencandle.jpg"
      alt="green candle"
      className={classes.headerImage}
    />
    <p className={classes.headerText}>Metrics Web App</p>
  </div>
);

export default Header;
