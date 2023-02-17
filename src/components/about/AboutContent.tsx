import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const AboutContent: React.FC = () => {
  // const user = useSelector<RootState>(state => state.auth.uid);
  // return <section>{user ? <h1>Welcome back, {user}</h1> : ''}</section>;
  return <h1>Welcome back</h1>;
};

export default AboutContent;
