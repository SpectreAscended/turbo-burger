import { Link } from 'react-router-dom';
import './reviewItem.scss';

interface ReviewItem {
  userName: string;
  title: string;
  rating: string;
  description: string;
  id: string;
}

const ReviewItem: React.FC<ReviewItem> = ({
  title,
  userName,
  description,
  rating,
  id,
}) => {
  return (
    <Link to={`${id}`} className="review-item">
      <h3 className="review-item__heading">{title}</h3>
      <span className="review-item__username">{userName}</span>
      <span className="review-item__rating">{rating}</span>
      <p className="reivew-item__description">{description}</p>
    </Link>
  );
};

export default ReviewItem;
