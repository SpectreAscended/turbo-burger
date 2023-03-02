import React, { useEffect, useState } from 'react';
import { auth } from '../../../firebase';

interface AuthUser {
  email: string | null;
  displayName: string | null;
}

const AuthDetails: React.FC = () => {
  const [authUser, setAuthUser] = useState<AuthUser>();

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
    auth.signOut();
  };

  return (
    <div>
      {authUser ? (
        <p>{`Signed in as ${authUser?.displayName}`}</p>
      ) : (
        <p>Signed out</p>
      )}
      <button type="button" onClick={userSignOut}>
        Sign out
      </button>
    </div>
  );
};

export default AuthDetails;
