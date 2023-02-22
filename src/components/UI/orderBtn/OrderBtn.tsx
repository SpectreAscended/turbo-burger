import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';
import './orderBtn.scss';

// TODO Add animation to make badge pop up when the cart goes from having no items, to having items

const OrderBtn: React.FC = () => {
  const [bounce, setBounce] = useState(false);
  const dispatch = useDispatch();

  const cartQty = useSelector<RootState>(
    state => state.order.cartQuantity
  ) as number;

  const btnBounceHandler = () => {
    dispatch(uiActions.closeMenu());
    setBounce(true);
    const timeout = setTimeout(() => {
      setBounce(false);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  };

  const orderClasses = `order noSelect ${bounce ? 'animate-bump' : ''}`;

  return (
    <Link to="/order" className={orderClasses} onClick={btnBounceHandler}>
      Your Order
      <div className="order-badge">{cartQty}</div>
    </Link>
  );
};

export default OrderBtn;
