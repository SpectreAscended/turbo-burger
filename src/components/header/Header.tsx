import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './Logo';
// import MainNav from './main-nav/MainNav';
// import classes from './Header.module.css';
import Hamburger from '../UI/hamburger/Hamburger';
import OrderBtn from '../UI/orderBtn/OrderBtn';
import MobileNav from '../main-nav/MobileNav';
import { uiActions } from '../../store/uiSlice';
import { RootState } from '../../store';
import './header.scss';
import { AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const menuState = useSelector<RootState>(
    state => state.ui.menuOpen
  ) as boolean;

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
      <AnimatePresence initial={false} mode="sync">
        {menuState && <MobileNav />}
      </AnimatePresence>
    </>
  );
};

export default Header;
