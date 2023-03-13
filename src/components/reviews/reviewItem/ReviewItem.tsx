import { Link } from 'react-router-dom';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import './reviewItem.scss';

const ReviewItem: React.FC<IReviewItem> = ({
  title,
  userName,
  description,
  rating,
  id,
  date,
}) => {
  const reviewDate = new Date(date);
  const formattedDate = reviewDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link to={`${id}`} className="review-item">
      <h3 className="review-item__heading">{title}</h3>
      <div className="review-item__container">
        <div>
          <span className="review-item__username">{userName}</span>
          <span className="review-item__date">{formattedDate}</span>
        </div>
        <span className="review-item__rating">{rating}/5</span>
      </div>
      <p className="reivew-item__description">{description}</p>
    </Link>
  );
};

export default ReviewItem;
