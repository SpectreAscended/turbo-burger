import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';
import { BTN_BOUNCE_DURATION } from '../../../utlities/config';
import './orderBtn.scss';

const OrderBtn: React.FC = () => {
  const [bounce, setBounce] = useState(false);
  const dispatch = useDispatch();

  const cartQty = useSelector<RootState>(
    state => state.order.cartQuantity
  ) as number;

  const buttonBounceEffect = () => {
    setBounce(true);
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
  }, [cartQty]);

  const orderClasses = `order noSelect ${bounce ? 'animate-bump' : ''}`;

  return (
    <Link to="/order" className={orderClasses} onClick={orderBtnHandler}>
      Your Order
      <div className="order-badge">{cartQty}</div>
    </Link>
  );
};

export default OrderBtn;
