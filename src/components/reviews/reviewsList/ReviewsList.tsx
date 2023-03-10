import { Link } from 'react-router-dom';
import { DUMMY_REVIEWS } from '../../../store/dummyData';
import ReviewItem from '../reviewItem/ReviewItem';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import './reviewsList.scss';

interface ReviewsListProps {
  reviews: IReviewItem[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  const reviewsList = reviews.slice();

  // const sortedList = reviewsList.sort((a, b) => {
  //   const dateB = new Date(b.date);
  //   const dateA = new Date(a.date);

  //   return dateB.getTime() - dateA.getTime();
  // });

  const sortedList = reviewsList.sort((a, b) => {
    const ratingA = +a.rating;
    const ratingB = +b.rating;

    return ratingB - ratingA;
  });

  return (
    <section className="reviews-list">
      <h1>Reviews</h1>
      <div className="reviews-list__actions">
        <Link to="new" className="reviews-list__link">
          Add Review
        </Link>
      </div>
      <ul>
        {sortedList.map(review => {
          return (
            <li key={review.id}>
              <ReviewItem
                id={review.id}
                title={review.title}
                userName={review.userName}
                rating={review.rating}
                description={review.description}
                date={review.date}
                uid={review.uid}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ReviewsList;
