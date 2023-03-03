import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import {
  SK_SALES_TAX,
  FREE_DELIVERY,
  DELIVERY_FEE,
} from '../../../../utlities/appConfig';
import './total.scss';

interface TotalProps {
  delivery: boolean;
}

const Total: React.FC<TotalProps> = ({ delivery }) => {
  const totalPrice = useSelector<RootState>(
    state => state.order.totalPrice
  ) as number;

  const tax = totalPrice * SK_SALES_TAX;

  const totalWithoutDelivery = totalPrice + tax;

  const totalWithDelivery = totalWithoutDelivery + DELIVERY_FEE;

  const freeDelivery = totalPrice >= FREE_DELIVERY;

  let totalOutput = <span>${totalWithoutDelivery.toFixed(2)}</span>;

  if (delivery && !freeDelivery) {
    totalOutput = <span>${totalWithDelivery.toFixed(2)}</span>;
  }

  // Displays styling on delivery fee if delivery is free.
  const deliveryClasses = delivery && freeDelivery ? 'total__free' : '';

  return (
    <div className="total">
      <p className="total__free-delivery">
        Free delivery on orders over ${FREE_DELIVERY.toFixed(2)}!
      </p>
      <div className="total__container">
        {delivery && (
          <div className="total__content">
            <p className="total__label">Delivery fee:</p>
            <span className={deliveryClasses}>${DELIVERY_FEE.toFixed(2)}</span>
          </div>
        )}
        <div className="total__content">
          <p>Sales tax ({SK_SALES_TAX * 100}%):</p>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="total__content">
          <p>Total:</p>
          {totalOutput}
        </div>
      </div>
    </div>
  );
};

export default Total;
