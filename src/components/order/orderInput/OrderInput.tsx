import './orderInput.scss';

interface OrderInputProps {
  onAdd: () => void;
  onRemove: () => void;
  quantity?: number;
}

const OrderInput: React.FC<OrderInputProps> = ({
  onAdd,
  onRemove,
  quantity,
}) => {
  return (
    <div className="order-input">
      <button
        type="button"
        onClick={onRemove}
        className="order-input__btn order-input__btn--minus"
      >
        -
      </button>
      <span className="order-input__quantity">{quantity}</span>

      <button
        type="button"
        onClick={onAdd}
        className="order-input__btn order-input__btn--add"
      >
        +
      </button>
    </div>
  );
};

export default OrderInput;
