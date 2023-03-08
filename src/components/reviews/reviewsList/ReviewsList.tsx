import { Link } from 'react-router-dom';
import { DUMMY_REVIEWS } from '../../../store/dummyData';
import ReviewItem from '../reviewItem/ReviewItem';
import './reviewsList.scss';

interface Review {
  userName: string;
  title: string;
  id: string;
  rating: string;
  description: string;
}

const ReviewsList: React.FC = () => {
  return (
    <section className="reviews-list">
      <h1>Reviews</h1>
      <div className="reviews-list__actions">
        <Link to="new" className="reviews-list__link">
          Add Review
        </Link>
      </div>
      <ul>
        {DUMMY_REVIEWS.map((review: Review) => {
          return (
            <li key={review.id}>
              <ReviewItem
                id={review.id}
                title={review.title}
                userName={review.userName}
                rating={review.rating}
                description={review.description}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ReviewsList;
