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
      <h3 className="menu__sub-heading">Burgers</h3>
      <ul className="menu__list">
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
      </ul>
      <h3 className="menu__sub-heading">Hot dogs</h3>
      <ul className="menu__list">
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
      </ul>
      <h3 className="menu__sub-heading">Chicken</h3>
      <ul className="menu__list">
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
      </ul>
      <h3 className="menu__sub-heading">Sides</h3>
      <ul className="menu__list">
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
      </ul>
      <h3 className="menu__sub-heading">Drinks</h3>
      <ul className="menu__list">
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
