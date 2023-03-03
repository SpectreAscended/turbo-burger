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

      const user = userCredential.user;
      const accessToken = await user?.getIdToken();
      const id = user?.uid;
      const userName = user?.displayName;
      console.log(userName);
      if (accessToken) {
        dispatch(
          authActions.login({
            uid: id,
            accessToken: accessToken,
            userName: userName,
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
    <form className="form" onSubmit={signInHandler}>
      <h1>Log in</h1>
      <AuthDetails />
      {error && <p style={{ color: 'red' }}>Incorrect email or password</p>}
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
