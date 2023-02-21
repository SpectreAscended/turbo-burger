import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { uiActions } from '../../store/uiSlice';
import { authActions } from '../../store/authSlice';
// import { auth } from '../../../firebase';
import Backdrop from '../UI/backdrop/Backdrop';
import './mobileNav.scss';
import { motion } from 'framer-motion';

const MobileNav: React.FC = () => {
  const dispatch = useDispatch();

  const dropIn = {
    hidden: {
      y: '-100vh',
    },

    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        bounce: 0.25,
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
        onClick={e => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <nav className="mobile-nav">
          <h2>Welcome back, Guest</h2>
          <ul>
            <li className="auth">
              <Link to="/login" onClick={closeMenuHandler} className="noSelect">
                Log in
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={closeMenuHandler} className="noSelect">
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                onClick={closeMenuHandler}
                className="noSelect"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenuHandler} className="noSelect">
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