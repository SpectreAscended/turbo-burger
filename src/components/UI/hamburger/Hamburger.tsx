import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../../store';
import './hamburger.scss';

interface HamburgerProps {
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => {
  const menuOpen = useSelector<RootState>(state => state.ui.menuOpen);

  const hamburgerClasses = `hamburger noSelect ${
    menuOpen ? 'hamburger--active' : ''
  }`;

  return (
    <button className={hamburgerClasses} onClick={onClick}>
      <div className="hamburger--top"></div>
      <div className="hamburger--middle"></div>
      <div className="hamburger--bottom"></div>
    </button>
  );
};

export default Hamburger;
