import './menu.scss';

interface IMenuItem {
  id: string;
  title: string;
  price: number;
  description?: string;
}

interface IMenuProps {
  burgers: IMenuItem[];
  hotdogs: IMenuItem[];
  chicken: IMenuItem[];
  drinks: IMenuItem[];
  sides: IMenuItem[];
}

const Menu: React.FC<IMenuProps> = ({
  burgers,
  hotdogs,
  chicken,
  drinks,
  sides,
}) => {
  return (
    <div className="menu">
      <h1 style={{ textAlign: 'center' }}>Menu</h1>
      <ul style={{ listStyle: 'none' }}>
        <h3 style={{ color: 'var(--color-secondary)' }}>Burgers</h3>
        {burgers.map(burger => {
          return (
            <li style={{ marginBlock: '1rem' }} key={burger.id}>
              <p style={{ marginBottom: '.5rem' }}>{burger.title}</p>
              <p style={{ marginBottom: '.5rem' }}>{burger.description}</p>
              <p>${burger.price.toFixed(2)}</p>
            </li>
          );
        })}
        <h3 style={{ color: 'var(--color-secondary)' }}>Hot dogs</h3>
        {hotdogs.map(hotdog => {
          return (
            <li style={{ marginBlock: '1rem' }} key={hotdog.id}>
              <p style={{ marginBottom: '.5rem' }}>{hotdog.title}</p>
              <p style={{ marginBottom: '.5rem' }}>{hotdog.description}</p>
              <p>${hotdog.price.toFixed(2)}</p>
            </li>
          );
        })}
        <h3 style={{ color: 'var(--color-secondary)' }}>Chicken</h3>
        {chicken.map(chicken => {
          return (
            <li style={{ marginBlock: '1rem' }} key={chicken.id}>
              <p style={{ marginBottom: '.5rem' }}>{chicken.title}</p>
              <p style={{ marginBottom: '.5rem' }}>{chicken.description}</p>
              <p>${chicken.price.toFixed(2)}</p>
            </li>
          );
        })}
        <h3 style={{ color: 'var(--color-secondary)' }}>Sides</h3>
        {sides.map(side => {
          return (
            <li style={{ marginBlock: '1rem' }} key={side.id}>
              <p style={{ marginBottom: '.5rem' }}>{side.title}</p>
              <p>${side.price.toFixed(2)}</p>
            </li>
          );
        })}
        <h3 style={{ color: 'var(--color-secondary)' }}>Drinks</h3>
        {drinks.map(drink => {
          return (
            <li style={{ marginBlock: '1rem' }} key={drink.id}>
              <p style={{ marginBottom: '.5rem' }}>{drink.title}</p>
              <p>${drink.price.toFixed(2)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
