import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MobileNav.module.css';

interface MobileNavProps {}

const MobileNav: React.FC = () => {
  return (
    <nav className={classes['mobile-nav']}>
      <h2>Welcome back, Dave!</h2>
      <ul>
        <li className={classes.auth}>
          <Link to="/auth">Log in</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/auth">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
