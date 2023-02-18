import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './Logo';
// import MainNav from './main-nav/MainNav';
// import classes from './Header.module.css';
import Hamburger from '../UI/Hamburger';
import OrderBtn from '../UI/OrderBtn';
import MobileNav from '../main-nav/MobileNav';
import { uiActions } from '../../store/uiSlice';
import { RootState } from '../../store';
import './header.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const menuState = useSelector<RootState>(state => state.ui.menuOpen);

  const showMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };
  return (
    <>
      <header className="header">
        <div className="header-content">
          <Logo />
          <div className="header-actions">
            <Hamburger onClick={showMenuHandler} />
            <OrderBtn />
          </div>
          {/* <MainNav /> */}
        </div>
        <div className="header-border-bottom"></div>
      </header>
      {menuState && <MobileNav />}
    </>
  );
};

export default Header;
