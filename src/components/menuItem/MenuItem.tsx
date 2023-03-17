import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderActions } from '../../store/orderSlice';
import OrderInput from '../order/orderInput/OrderInput';
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
  const dispatch = useDispatch();

  const addQtyHandler = () => {
    if (orderQty < 40) {
      setOrderQty(prevQty => prevQty + 1);
    }
  };

  const reduceQtyHandler = () => {
    if (orderQty > 1) setOrderQty(prevQty => prevQty - 1);
  };

  const totalItemPrice = orderQty * item.price;

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (orderQty >= 1) {
      const newItem = {
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: orderQty,
      };

      dispatch(orderActions.addToCart(newItem));
    }
  };

  return (
    <section className="menu-item">
      <h1 className="menu-item__heading">{item.title}</h1>
      {item.description && (
        <p className="menu-item__description">{item.description}</p>
      )}

      <span className="menu-item__price">${item.price.toFixed(2)}</span>

      <form onSubmit={formSubmitHandler} className="menu-item__form">
        <OrderInput
          onRemove={reduceQtyHandler}
          onAdd={addQtyHandler}
          quantity={orderQty}
        />
        <div className="menu-item__form-actions">
          <Link to=".." className="menu-item__form-back">
            Back to menu
          </Link>
          <button
            className="menu-item__form-order-btn"
            type="submit"
            disabled={orderQty < 1}
          >
            Add to order (${totalItemPrice.toFixed(2)})
          </button>
        </div>
      </form>
    </section>
  );
};

export default MenuItem;
