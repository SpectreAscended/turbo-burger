import React from 'react';
import turboLogoTop from '../../assets/Turbo Burger Logo--Turbo.svg';
import turboLogoBottom from '../../assets/Turbo Burger Logo--Burger.svg';
import './logo.scss';

const Logo: React.FC = () => {
  return (
    <div className="header-logo">
      <div className="header-logo--top">
        <img src={turboLogoTop} alt="Turbo" />
      </div>
      <div className="header-logo--bottom">
        <img src={turboLogoBottom} alt="Burger" />
      </div>
    </div>
  );
};

export default Logo;
