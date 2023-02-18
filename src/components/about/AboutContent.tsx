import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { auth } from '../../../firebase';
import './aboutContent.scss';

const AboutContent: React.FC = () => {
  const userName = auth.currentUser?.displayName;
  const output = userName ? (
    <h1>Welcome back, {userName}!</h1>
  ) : (
    <h1>Welcome to Turbo Burger!</h1>
  );
  return output;
};

export default AboutContent;
