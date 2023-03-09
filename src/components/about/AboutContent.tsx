import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store';
import './aboutContent.scss';

const AboutContent: React.FC = () => {
  const userName = useSelector<RootState>(
    state => state.auth.currentUser.userName
  ) as string;

  const output = userName ? (
    <h1>Welcome back, {userName}!</h1>
  ) : (
    <h1>Welcome to Turbo Burger!</h1>
  );
  return output;
};

export default AboutContent;
