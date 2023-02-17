import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { auth } from '../../../firebase';

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const submitSignUpHandler = async (e: React.FormEvent) => {
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

    try {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      console.log(userCredentials.user?.uid);
      dispatch(authActions.signup({ uid: userCredentials.user!.uid }));
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('An unknown error occured:', err);
      }
      return;
    }

    firstNameRef.current!.value = '';
    emailRef.current!.value = '';
    passwordRef.current!.value = '';
    confirmPasswordRef.current!.value = '';
    navigate('/');
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
