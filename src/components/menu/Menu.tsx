import { Link } from 'react-router-dom';
import './menu.scss';

interface MenuItem {
  id: string;
  title: string;
  price: number;
  description?: string;
}

interface MenuProps {
  burgers: MenuItem[];
  hotdogs: MenuItem[];
  chicken: MenuItem[];
  drinks: MenuItem[];
  sides: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({
  burgers,
  hotdogs,
  chicken,
  drinks,
  sides,
}) => {
  return (
    <section className="menu">
      <h1 className="menu__heading">Menu</h1>
      <ul>
        <h3>Burgers</h3>
        {burgers.map(burger => {
          return (
            <li key={burger.id} className="menu__list-item">
              <Link to={`/menu/${burger.id}`} className={'menu__link'}>
                <h4 className="menu__list-item--heading">{burger.title}</h4>
                <p className="menu__list-item--price">
                  ${burger.price.toFixed(2)}
                </p>
              </Link>
            </li>
          );
        })}
        <h3>Hot dogs</h3>
        {hotdogs.map(hotdog => {
          return (
            <li key={hotdog.id} className="menu__list-item">
              <Link to={`/menu/${hotdog.id}`} className={'menu__link'}>
                <h4 className="menu__list-item--heading">{hotdog.title}</h4>
                <p className="menu__list-item--price">
                  ${hotdog.price.toFixed(2)}
                </p>
              </Link>
            </li>
          );
        })}
        <h3>Chicken</h3>
        {chicken.map(chicken => {
          return (
            <li key={chicken.id} className="menu__list-item">
              <Link to={`/menu/${chicken.id}`} className={'menu__link'}>
                <h4 className="menu__list-item--heading">{chicken.title}</h4>
                <p className="menu__list-item--price">
                  ${chicken.price.toFixed(2)}
                </p>
              </Link>
            </li>
          );
        })}
        <h3>Sides</h3>
        {sides.map(side => {
          return (
            <li key={side.id} className="menu__list-item">
              <Link to={`/menu/${side.id}`} className={'menu__link'}>
                <h4 className="menu__list-item--heading">{side.title}</h4>
                <p className="menu__list-item--price">
                  ${side.price.toFixed(2)}
                </p>
              </Link>
            </li>
          );
        })}
        <h3>Drinks</h3>
        {drinks.map(drink => {
          return (
            <li key={drink.id} className="menu__list-item">
              <Link to={`/menu/${drink.id}`} className={'menu__link'}>
                <h4 className="menu__list-item--heading">{drink.title}</h4>
                <p className="menu__list-item--price">
                  ${drink.price.toFixed(2)}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
