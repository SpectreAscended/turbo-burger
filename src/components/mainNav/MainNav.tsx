import { NavLink } from 'react-router-dom';
import './mainNav.scss';

const MainNav: React.FC = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
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
            to="/login"
            className={({ isActive }) =>
              isActive ? 'main-nav__login--active' : 'main-nav__login'
            }
          >
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

// <NavLink
// to="/"
// className={({ isActive }) => (isActive ? 'active' : undefined)}
// >
// About
// </NavLink>
