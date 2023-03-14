import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.scss';

const MainNav: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="menu"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Reviews
          </NavLink>
        </li>
        {/* <li className={orderClasses()} onClick={buttonBounceHandler}>
          <NavLink to="order">Your Order</NavLink>
          <div className={classes.badge}>5</div>
        </li> */}
        <li className="auth">
          <NavLink to="auth">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
