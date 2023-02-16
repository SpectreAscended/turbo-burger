import React, { useState } from 'react';
import Logo from './Logo';
import MainNav from './main-nav/MainNav';
// import classes from './Header.module.css';
import classes from './HeaderMobile.module.css';
import Hamburger from '../UI/Hamburger';
import OrderBtn from '../UI/OrderBtn';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenuHandler = () => {
    setMenuOpen(menuOpen => !menuOpen);
  };
  return (
    <>
      <header className={classes.header}>
        <Logo />
        <div className={classes.actions}>
          <Hamburger onShowMenu={showMenuHandler} />
          <OrderBtn />
        </div>
        {/* <MainNav /> */}
      </header>
      <div className={classes['border-bottom']}></div>
    </>
  );
};

export default Header;
