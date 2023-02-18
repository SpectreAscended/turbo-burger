import classes from './Menu.module.css';

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
    <div>
      <h1 style={{ textAlign: 'center' }}>Menu</h1>
      <h3 style={{ color: 'var(--color-secondary)' }}>Burgers</h3>
      <ul style={{ listStyle: 'none' }}>
        {burgers.map(burger => {
          return (
            <li style={{ marginBlock: '1rem' }}>
              <p style={{ marginBottom: '.5rem' }}>{burger.title}</p>
              <p style={{ marginBottom: '.5rem' }}>{burger.description}</p>
              <p>{burger.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
