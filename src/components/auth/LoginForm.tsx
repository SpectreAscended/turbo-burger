import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../../firebase';
import { authActions } from '../../store/authSlice';
import AuthDetails from './AuthDetails';
import './authForm.scss';

interface LoginFormProps {}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

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
      navigate('/');
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <form className="form" onSubmit={signInHandler}>
      <h1>Log in</h1>
      {error && <p style={{ color: 'red' }}>Incorrect email or password</p>}
      <AuthDetails />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" autoComplete="email" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        ref={passwordRef}
      />
      <span>
        Need an account? <Link to="/signup">Sign up!</Link>
      </span>
      <button>Log in</button>
    </form>
  );
};

export default LoginForm;
