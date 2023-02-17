import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.css';

const MainNav: React.FC = () => {
  const [bump, setBump] = useState(false);

  const buttonBounceHandler = () => {
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 750);
  };

  useEffect(() => {}, []);

  const orderClasses = () => {
    return `${classes.order} ${bump ? classes['animate-badge'] : undefined}`;
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes['nav-list']}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="menu"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Reviews
          </NavLink>
        </li>
        <li className={orderClasses()} onClick={buttonBounceHandler}>
          <NavLink to="order">Your Order</NavLink>
          <div className={classes.badge}>5</div>
        </li>
        <li className={classes.auth}>
          <NavLink to="auth">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
