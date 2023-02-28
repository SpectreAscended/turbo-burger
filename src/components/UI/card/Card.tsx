import './card.scss';

interface CardProps {
  children: any;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
