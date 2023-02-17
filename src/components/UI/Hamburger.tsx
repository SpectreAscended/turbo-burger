import React from 'react';
import classes from './Hamburger.module.css';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store';

interface HamburgerProps {
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => {
  const menuOpen = useSelector<RootState>(state => state.ui.menuOpen);

  const hamburgerClasses = `${classes.hamburger} ${
    menuOpen ? classes['hamburger--active'] : ''
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
