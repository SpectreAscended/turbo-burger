import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';
import { BTN_BOUNCE_DURATION } from '../../../utlities/appConfig';
import useFirstRender from '../../../hooks/useFirstRender';
import './orderBtn.scss';

const OrderBtn: React.FC = () => {
  const [bounce, setBounce] = useState(false);
  const firstRender = useFirstRender();
  const dispatch = useDispatch();

  const items = useSelector<RootState>(state => state.order.items) as {
    quantity: number;
  }[];

  const cartQty = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const buttonBounceEffect = () => {
    if (!firstRender) {
      setBounce(true);
    }
    const timeout = setTimeout(() => {
      setBounce(false);
    }, BTN_BOUNCE_DURATION);

    return () => {
      clearTimeout(timeout);
    };
  };

  const orderBtnHandler = () => {
    dispatch(uiActions.closeMenu());
    buttonBounceEffect();
  };

  useEffect(() => {
    buttonBounceEffect();
  }, [cartQty, firstRender]);

  const orderClasses = `order noSelect ${bounce ? 'animate-bump' : ''}`;

  return (
    <Link to="/order" className={orderClasses} onClick={orderBtnHandler}>
      Your Order
      <div className="order-badge">{cartQty}</div>
    </Link>
  );
};

export default OrderBtn;
