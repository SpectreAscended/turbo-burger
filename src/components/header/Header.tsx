import React from 'react';
import Logo from './Logo';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav>
        <ul>
          <li>Menu</li>
          <li>Reviews</li>
          <li>Order</li>
          <li>Log in</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
