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
      <h1>Menu</h1>
      <ul>
        <h3>Burgers</h3>
        {burgers.map(burger => {
          return (
            <li key={burger.id}>
              <Link to={`/menu/${burger.id}`}>
                <h4>{burger.title}</h4>
                <p>${burger.price.toFixed(2)}</p>
              </Link>
            </li>
          );
        })}
        <h3>Hot dogs</h3>
        {hotdogs.map(hotdog => {
          return (
            <li key={hotdog.id}>
              <Link to={`/menu/${hotdog.id}`}>
                <h4>{hotdog.title}</h4>
                <p>${hotdog.price.toFixed(2)}</p>
              </Link>
            </li>
          );
        })}
        <h3>Chicken</h3>
        {chicken.map(chicken => {
          return (
            <li key={chicken.id}>
              <Link to={`/menu/${chicken.id}`}>
                <h4>{chicken.title}</h4>
                <p>${chicken.price.toFixed(2)}</p>
              </Link>
            </li>
          );
        })}
        <h3>Sides</h3>
        {sides.map(side => {
          return (
            <li key={side.id}>
              <Link to={`/menu/${side.id}`}>
                <h4>{side.title}</h4>
                <p>${side.price.toFixed(2)}</p>
              </Link>
            </li>
          );
        })}
        <h3>Drinks</h3>
        {drinks.map(drink => {
          return (
            <li key={drink.id}>
              <Link to={`/menu/${drink.id}`}>
                <h4>{drink.title}</h4>
                <p>${drink.price.toFixed(2)}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
