import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [orderQty, setOrderQty] = useState(1);

  const addQtyHandler = () => {
    if (orderQty < 40) {
      setOrderQty(prevQty => prevQty + 1);
    }
  };

  const removeQtyHandler = () => {
    if (orderQty > 0) setOrderQty(prevQty => prevQty - 1);
  };

  const totalItemPrice = orderQty * item.price;

  return (
    <section className="menu-item">
      <h1>{item.title}</h1>
      {item.description && <p>{item.description}</p>}
      <span className="menu-item-price">${item.price.toFixed(2)}</span>

      <form>
        <div className="menu-item-form--actions">
          <button type="button" onClick={removeQtyHandler}>
            -
          </button>
          <input type="number" value={orderQty} min="0" max="40" />
          <button type="button" onClick={addQtyHandler}>
            +
          </button>
        </div>
        <button className="order-btn" type="submit" disabled={orderQty === 0}>
          Add to order (${totalItemPrice.toFixed(2)})
        </button>
      </form>

      <Link to="..">Back to menu</Link>
    </section>
  );
};

export default MenuItem;
