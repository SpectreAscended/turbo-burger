import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../../firebase';
import { authActions } from '../../store/authSlice';
import AuthDetails from './AuthDetails';
import './authForm.scss';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signInHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const userEmail = emailRef.current!.value;
    const userPassword = passwordRef.current!.value;
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        userEmail,
        userPassword
      );

      console.log(userCredential);

      const user = userCredential.user;
      const id = user?.uid;
      const userName = user?.displayName;
      const accessToken = await user?.getIdToken();

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem('expiration', expiration.toISOString());

      if (accessToken) {
        localStorage.setItem('token', accessToken);
        dispatch(
          authActions.setUser({
            uid: id,
            userName: userName,
            isAuthenticated: true,
          })
        );
      }

      navigate('/');
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={signInHandler}>
      <h1 className="auth-form__heading">Log in</h1>
      <AuthDetails />
      {error && (
        <p style={{ color: 'red' }} className="auth-form__error">
          Incorrect email or password
        </p>
      )}
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
      <span className="auth-form__query">
        Need an account?{' '}
        <Link to="/signup" className="auth-form__link">
          Sign up!
        </Link>
      </span>
      <button className="auth-form__btn">Log in</button>
    </form>
  );
};

export default LoginForm;
