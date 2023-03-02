import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { uiActions } from '../../store/uiSlice';
import { authActions } from '../../store/authSlice';
// import { auth } from '../../../firebase';
import Backdrop from '../UI/backdrop/Backdrop';
import './mobileNav.scss';
import { motion } from 'framer-motion';
import { RootState } from '../../store';

const MobileNav: React.FC = () => {
  const dispatch = useDispatch();
  const userSignedIn = useSelector<RootState>(
    state => state.auth.accessToken
  ) as string | undefined;
  const userName = useSelector<RootState>(
    state => state.auth.userName
  ) as string;

  console.log(userName);
  const dropIn = {
    hidden: {
      y: '-100vh',
    },

    visible: {
      y: 0,
      transition: {
        duration: 0.4,
        // type: 'spring',
        // bounce: 0.25,
      },
    },

    exit: {
      y: '-100vh',
    },
  };

  const closeMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };

  const signOutHandler = () => {
    dispatch(authActions.signOut());
  };

  return (
    <Backdrop onClick={closeMenuHandler}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <nav className="mobile-nav">
          <h2>Welcome back, {userName ? userName : 'Guest'}!</h2>
          <ul>
            <li className="auth">
              {!userSignedIn ? (
                <Link to="/login" className="noSelect">
                  Log in
                </Link>
              ) : (
                <button
                  onClick={signOutHandler}
                  className="mobile-nav__btn--logout"
                >
                  Log out
                </button>
              )}
              {/* <Link to="/login" className="noSelect">
                Log in
              </Link> */}
            </li>
            <li>
              <Link to="/menu" className="noSelect">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="noSelect">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/" className="noSelect">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </Backdrop>
  );
};

export default MobileNav;
