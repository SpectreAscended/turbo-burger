import './menuItem.scss';

interface MenuItemProps {
  item: {
    id: string;
    title: string;
    description?: string;
    price: number;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      {item.description && <p>{item.description}</p>}
      <span>{item.price}</span>
    </div>
  );
};

export default MenuItem;
