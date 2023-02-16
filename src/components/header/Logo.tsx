import React from 'react';
import classes from './Logo.module.css';
import turboLogoTop from '../../assets/Turbo Burger Logo--Turbo.svg';
import turboLogoBottom from '../../assets/Turbo Burger Logo--Burger.svg';

const Logo = () => {
  return (
    <div className={classes['header-logo']}>
      <div className={classes['header-logo--top']}>
        <img src={turboLogoTop} alt="Turbo" />
      </div>
      <div className={classes['header-logo--bottom']}>
        <img src={turboLogoBottom} alt="Burger" />
      </div>
    </div>
  );
};

export default Logo;
