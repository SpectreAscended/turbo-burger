import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.css';

interface LoginFormProps {}

const LoginForm: React.FC = () => {
  return (
    <form className={classes.form}>
      <h1>Log in</h1>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" autoComplete="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" autoComplete="current-password" />
      <span>
        Need an account? <Link to="/signup">Sign up!</Link>
      </span>
      <button>Log in</button>
    </form>
  );
};

export default LoginForm;
