import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.css';

const SignupForm: React.FC = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const submitSignUpHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email: ', emailRef);
    console.log('Password: ', passwordRef);
    console.log('Confirm Password: ', confirmPasswordRef);
  };

  return (
    <form className={classes.form}>
      <h2>Sign up</h2>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" ref={firstNameRef} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" autoComplete="email" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        ref={passwordRef}
      />
      <label htmlFor="confirm-password">Confirm password</label>
      <input
        type="password"
        id="confirm-password"
        autoComplete="current-password"
        ref={confirmPasswordRef}
      />
      <span>
        Already have an account? <Link to="/login">Log in!</Link>
      </span>
      <button>Sign up</button>
    </form>
  );
};

export default SignupForm;
