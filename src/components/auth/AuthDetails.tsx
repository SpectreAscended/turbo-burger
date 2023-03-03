import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { auth } from '../../../firebase';
// import { RootState } from '../../store';

interface AuthUser {
  email: string | null;
  displayName: string | null;
}

const AuthDetails: React.FC = () => {
  const [authUser, setAuthUser] = useState<AuthUser>();
  const dispatch = useDispatch();
  // const accessToken = useSelector<RootState>(state => state.auth.accessToken);

  useEffect(() => {
    const listen = auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(undefined);
      }
    });

    return () => listen();
  }, []);

  const userSignOut = async () => {
    dispatch(authActions.signOut());
  };

  return (
    <div>
      {authUser && <p>{`Signed in as ${authUser?.displayName}`}</p>}
      {authUser && (
        <button type="button" onClick={userSignOut}>
          Sign out
        </button>
      )}
    </div>
  );
};

export default AuthDetails;
