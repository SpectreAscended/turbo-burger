import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MobileNav.module.css';

interface MobileNavProps {
  onCloseMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onCloseMenu }) => {
  return (
    <nav className={classes['mobile-nav']}>
      <h2>Welcome back, Dave!</h2>
      <ul>
        <li className={classes.auth}>
          <Link to="/login" onClick={onCloseMenu}>
            Log in
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={onCloseMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={onCloseMenu}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/" onClick={onCloseMenu}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
