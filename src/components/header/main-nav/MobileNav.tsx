import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import uiSlice, { uiActions } from '../../../store/uiSlice';
import { authActions } from '../../../store/authSlice';
import classes from './MobileNav.module.css';
import { auth } from '../../../../firebase';

interface MobileNavProps {}

const MobileNav: React.FC = () => {
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };

  const signOutHandler = () => {
    dispatch(authActions.signOut());
  };

  return (
    <nav className={classes['mobile-nav']}>
      <h2>Welcome back, Guest</h2>
      <ul>
        <li className={classes.auth}>
          <Link to="/login" onClick={closeMenuHandler}>
            Log in
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={closeMenuHandler}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={closeMenuHandler}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/" onClick={closeMenuHandler}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
