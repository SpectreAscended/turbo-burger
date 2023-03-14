import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { uiActions } from '../../../store/uiSlice';
import { authActions } from '../../../store/authSlice';
import Backdrop from './backdrop/Backdrop';
import './mobileNav.scss';
import { motion } from 'framer-motion';
import { RootState } from '../../../store';

const MobileNav: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector<RootState>(
    state => state.auth.currentUser.isAuthenticated
  ) as boolean;
  const userName = useSelector<RootState>(
    state => state.auth.currentUser.userName
  ) as string;

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
              {!isAuthenticated ? (
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
