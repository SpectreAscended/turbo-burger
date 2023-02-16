import React from 'react';
import Logo from './Logo';
import MainNav from './main-nav/MainNav';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <MainNav />
    </header>
  );
};

export default Header;
