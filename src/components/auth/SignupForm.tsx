import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { auth } from '../../../firebase';
import './authForm.scss';

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

      const user = userCredentials.user;
      const userName = firstNameRef.current!.value;
      const accessToken = await user?.getIdToken();

      if (user) {
        await user.updateProfile({
          displayName: userName,
        });
      }

      console.log(userCredentials);

      dispatch(
        authActions.setUser({
          uid: userCredentials.user!.uid,
          accessToken: accessToken,
          userName: userName,
        })
      );
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
    <form className="auth-form" onSubmit={submitSignUpHandler}>
      <h1 className="auth-form__heading">Sign up</h1>
      <label htmlFor="first-name" className="auth-form__label">
        First Name
      </label>
      <input
        type="text"
        id="first-name"
        ref={firstNameRef}
        className="auth-form__input"
      />
      <label htmlFor="email" className="auth-form__label">
        Email
      </label>
      <input
        type="email"
        id="email"
        autoComplete="email"
        ref={emailRef}
        className="auth-form__input"
      />
      <label htmlFor="password" className="auth-form__label">
        Password
      </label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        ref={passwordRef}
        className="auth-form__input"
      />
      <label htmlFor="confirm-password" className="auth-form__label">
        Confirm password
      </label>
      <input
        type="password"
        id="confirm-password"
        autoComplete="current-password"
        ref={confirmPasswordRef}
        className="auth-form__input"
      />
      <span>
        Already have an account?{' '}
        <Link to="/login" className="auth-form__link">
          Log in!
        </Link>
      </span>
      <button type="submit" className="auth-form__btn">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
