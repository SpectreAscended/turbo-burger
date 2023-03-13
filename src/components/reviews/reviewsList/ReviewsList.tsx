import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import './reviewsList.scss';

interface ReviewsListProps {
  reviews: IReviewItem[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  const reviewsList = reviews.slice();
  const [sorttedList, setSorttedList] = useState(reviewsList);
  // setRefresh is a bit of a hack to force the component to refresh to solve bug where onChange isnt firing properly on mobile browsers.
  const [_, setRefresh] = useState(false);

  const sortMethodHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    const sortMethod = e.currentTarget.value;
    switch (sortMethod) {
      case 'rating-highest': {
        reviewsList.sort((a, b) => {
          const ratingA = +a.rating;
          const ratingB = +b.rating;

          return ratingB - ratingA;
        });
        setSorttedList(reviewsList);
        setRefresh(e => !e);
        break;
      }
      case 'rating-lowest': {
        reviewsList.sort((a, b) => {
          const ratingB = +b.rating;
          const ratingA = +a.rating;

          return ratingA - ratingB;
        });
        setSorttedList(reviewsList);
        setRefresh(e => !e);
        break;
      }
      case 'date-newest': {
        reviewsList.sort((a, b) => {
          const dateB = new Date(b.date);
          const dateA = new Date(a.date);

          return dateB.getTime() - dateA.getTime();
        });
        setSorttedList(reviewsList);
        setRefresh(e => !e);
        break;
      }
      case 'date-oldest': {
        reviewsList.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        });
        setSorttedList(reviewsList);
        setRefresh(e => !e);
        break;
      }
    }
  };

  return (
    <section className="reviews-list">
      <h1>Reviews</h1>
      <div className="reviews-list__actions">
        <select
          name="sort-reviews"
          id="sort-reviews"
          className="reviews-list__sort"
          onChange={sortMethodHandler}
        >
          <option value="rating-highest">Rating (Highest to lowest)</option>
          <option value="rating-lowest">Rating (Lowest to highest)</option>
          <option value="date-newest">Date (Newest to oldest)</option>
          <option value="date-oldest">Date (Oldest to newest)</option>
        </select>

        <Link to="new" className="reviews-list__link">
          Add Review
        </Link>
      </div>
      <ul>
        {sorttedList.map(review => {
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
