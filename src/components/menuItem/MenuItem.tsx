import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderActions } from '../../store/orderSlice';
import './menuItem.scss';

interface MenuItemProps {
  item: {
    id: string;
    title: string;
    description?: string;
    price: number;
  };
}

type DrinkOptions = {
  value: string;
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [orderQty, setOrderQty] = useState(1);
  const [drinkSelection, setDrinkSelection] = useState('Coke');
  const dispatch = useDispatch();

  const addQtyHandler = () => {
    if (orderQty < 40) {
      setOrderQty(prevQty => prevQty + 1);
    }
  };

  const removeQtyHandler = () => {
    if (orderQty > 0) setOrderQty(prevQty => prevQty - 1);
  };

  const totalItemPrice = orderQty * item.price;

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (orderQty > 0) {
      const newItem = {
        id: item.id,
        price: +item.price,
        title: item.title,
        quantity: orderQty,
      };

      dispatch(orderActions.addToCart(newItem));
    }
  };

  return (
    <section className="menu-item">
      <h1>{item.title}</h1>
      {item.description && <p>{item.description}</p>}

      <span className="menu-item-price">${item.price.toFixed(2)}</span>

      <form onSubmit={formSubmitHandler}>
        <div className="menu-item-form--actions">
          <button type="button" onClick={removeQtyHandler}>
            -
          </button>
          <input type="number" value={orderQty} min="0" max="40" readOnly />
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
