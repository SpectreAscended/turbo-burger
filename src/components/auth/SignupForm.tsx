import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const submitSignUpHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      firstNameRef.current?.value.trim() === '' ||
      emailRef.current?.value.trim() === '' ||
      passwordRef.current?.value.trim() === '' ||
      confirmPasswordRef.current?.value.trim() === ''
    ) {
      console.error('All fields must not be empty');
      return;
    }

    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
      console.error('Paswords do not match');
      return;
    }

    dispatch(
      authActions.signup({
        firstName: firstNameRef.current!.value,
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      })
    );

    firstNameRef.current!.value = '';
    emailRef.current!.value = '';
    passwordRef.current!.value = '';
    confirmPasswordRef.current!.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitSignUpHandler}>
      <h1>Sign up</h1>
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
