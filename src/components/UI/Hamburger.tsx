import React from 'react';
import classes from './Hamburger.module.css';

interface HamburgerProps {
  onShowMenu?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onShowMenu }) => {
  return (
    <div className={classes.hamburger} onClick={onShowMenu}>
      <div className={classes['hamburger--top']}></div>
      <div className={classes['hamburger--middle']}></div>
      <div className={classes['hamburger--bottom']}></div>
    </div>
  );
};

export default Hamburger;
