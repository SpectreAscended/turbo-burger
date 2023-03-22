import { NavLink } from 'react-router-dom';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../../store/authSlice';

import './mainNav.scss';

const MainNav: React.FC = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector<RootState>(
    state => state.auth.currentUser.isAuthenticated
  ) as boolean;

  const logoutHandler = () => {
    dispatch(authActions.signOut());
  };

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'main-nav__link--active' : 'main-nav__link'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? 'main-nav__link--active' : 'main-nav__link'
            }
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'main-nav__link--active' : 'main-nav__link'
            }
          >
            Menu
          </NavLink>
        </li>

        <li>
          {!isAuthenticated ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'main-nav__auth--active' : 'main-nav__auth'
              }
            >
              Log in
            </NavLink>
          ) : (
            <button className="main-nav__auth" onClick={logoutHandler}>
              Log out
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
