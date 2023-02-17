import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.css';

const SignupForm: React.FC = () => {
  return (
    <form className={classes.form}>
      <h2>Sign up</h2>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" autoComplete="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" autoComplete="current-password" />
      <label htmlFor="confirm-password">Confirm password</label>
      <input
        type="password"
        id="confirm-password"
        autoComplete="current-password"
      />
      <span>
        Already have an account? <Link to="/login">Log in!</Link>
      </span>
      <button>Sign up</button>
    </form>
  );
};

export default SignupForm;
