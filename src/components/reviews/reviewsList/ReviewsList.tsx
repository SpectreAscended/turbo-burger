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
    <div className="reviews-list">
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
    </div>
  );
};

export default ReviewsList;
