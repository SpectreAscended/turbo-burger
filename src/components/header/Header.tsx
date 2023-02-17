import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './Logo';
// import MainNav from './main-nav/MainNav';
// import classes from './Header.module.css';
import classes from './HeaderMobile.module.css';
import Hamburger from '../UI/Hamburger';
import OrderBtn from '../UI/OrderBtn';
import MobileNav from './main-nav/MobileNav';
import { uiActions } from '../../store/uiSlice';
import { RootState } from '../../store';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const menuState = useSelector<RootState>(state => state.ui.menuOpen);

  const showMenuHandler = () => {
    // setMenuOpen(menuOpen => !menuOpen);
    dispatch(uiActions.toggleMenu());
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes['header-content']}>
          <Logo />
          <div className={classes.actions}>
            <Hamburger onClick={showMenuHandler} />
            <OrderBtn />
          </div>
          {/* <MainNav /> */}
        </div>
        <div className={classes['border-bottom']}></div>
      </header>
      {menuState && <MobileNav />}
    </>
  );
};

export default Header;
