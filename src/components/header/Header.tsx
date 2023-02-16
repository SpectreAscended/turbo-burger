import React, { useState } from 'react';
import Logo from './Logo';
import MainNav from './main-nav/MainNav';
// import classes from './Header.module.css';
import classes from './HeaderMobile.module.css';
import Hamburger from '../UI/Hamburger';
import OrderBtn from '../UI/OrderBtn';
import MobileNav from './main-nav/MobileNav';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenuHandler = () => {
    setMenuOpen(menuOpen => !menuOpen);
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes['header-content']}>
          <Logo />
          <div className={classes.actions}>
            <Hamburger onClick={showMenuHandler} menuOpen={menuOpen} />
            <OrderBtn />
          </div>
          {/* <MainNav /> */}
        </div>
        <div className={classes['border-bottom']}></div>
      </header>
      {menuOpen && <MobileNav onCloseMenu={showMenuHandler} />}
    </>
  );
};

export default Header;
