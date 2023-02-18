import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store';
import './hamburger.scss';

interface HamburgerProps {
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => {
  const menuOpen = useSelector<RootState>(state => state.ui.menuOpen);

  const hamburgerClasses = `hamburger ${menuOpen ? 'hamburger--active' : ''}`;

  return (
    <div className={hamburgerClasses} onClick={onClick}>
      <div className="hamburger--top"></div>
      <div className="hamburger--middle"></div>
      <div className="hamburger--bottom"></div>
    </div>
  );
};

export default Hamburger;
