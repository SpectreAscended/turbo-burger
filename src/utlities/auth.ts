import { auth } from '../../firebase';
import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );

    const user = userCredential.user;

    if (!user) {
      throw new Error('Problem signing in.');
    }

    const accessToken = await user?.getIdToken();
    localStorage.setItem('token', accessToken);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());

    const currentUser = {
      id: user.uid,
      userName: user.displayName,
      isAuthneticated: true,
    };

    return currentUser;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    return {
      message: 'Problem signing in',
    };
  }
};

export const getTokenDuration = () => {
  const storedExpiration = localStorage.getItem('expiration');
  if (!storedExpiration) {
    return null;
  }
  const expiration = new Date(storedExpiration);
  const now = new Date();

  const duration = expiration.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  // BUG This may be why this was crashing. Investigate further.
  const tokenDuration = getTokenDuration();
  // const dispatch = useDispatch();

  const userName = auth.currentUser?.displayName;
  const uid = auth.currentUser?.uid;
  // dispatch(authActions.setUser({ userName, uid, isAuthenticated: true }));

  if (!tokenDuration || tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
};

export const checkAuthLoader = () => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    return redirect('/login');
  }

  return null;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const signOut = () => {
  auth.signOut();
  localStorage.removeItem('expiration');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getUserInfo = () => {
  // const currentUser = useSelector<RootState>(state => state.auth.currentUser);
};
