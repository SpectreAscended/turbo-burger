import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import uiSlice, { uiActions } from '../../store/uiSlice';
import { authActions } from '../../store/authSlice';
import { auth } from '../../../firebase';
import './mobileNav.scss';

interface MobileNavProps {}

const MobileNav: React.FC = () => {
  const dispatch = useDispatch();

  const closeMenuHandler = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    dispatch(uiActions.toggleMenu());
  };

  const closeMenuInsideHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const signOutHandler = () => {
    dispatch(authActions.signOut());
  };

  return (
    <div className="backdrop" onClick={closeMenuHandler}>
      <nav className="mobile-nav" onClick={closeMenuInsideHandler}>
        <h2>Welcome back, Guest</h2>
        <ul>
          <li className="auth">
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
    </div>
  );
};

export default MobileNav;
