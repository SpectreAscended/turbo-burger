import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import burgerImg from '../../assets/burger-spread.jpg';
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
  return (
    <>
      <h1>Welcome to Turbo Burger!</h1>
      <p>
        Turbo Burger is home to the world famous Turbo Burger! We use only the
        freshest ingredients and highest quality prime Canadian beef.
      </p>
      <div
        style={{
          width: '20rem',
          margin: '2rem auto',
        }}
      >
        <img
          src={burgerImg}
          alt="Burger"
          style={{ width: '100%', borderRadius: '1rem' }}
        />
      </div>
      <p>
        Established in 1993. Turbo Burger was founded by 2 brothers with one
        goal in mind: Serve the freshest, juiciest burgers in town!
      </p>
      <p>Winner of the 1995 Burger of the year award</p>
    </>
  );
};

export default AboutContent;
