import React from 'react';
import classes from './Hamburger.module.css';

interface HamburgerProps {
  onClick?: () => void;
  menuOpen: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, menuOpen }) => {
  const hamburgerClasses = `${classes.hamburger} ${
    menuOpen ? classes['hamburger--active'] : undefined
  }`;

  return (
    <div className={hamburgerClasses} onClick={onClick}>
      <div className={classes['hamburger--top']}></div>
      <div className={classes['hamburger--middle']}></div>
      <div className={classes['hamburger--bottom']}></div>
    </div>
  );
};

export default Hamburger;
