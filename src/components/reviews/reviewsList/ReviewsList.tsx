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
  // setRefresh is a bit of a hack to force the component to rerender to solve bug where sorttedList isnt rerendering properly on mobile browsers.
  const [_, setForceRefresh] = useState(false);

  const sortMethodHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    const sortMethod = e.currentTarget.value;
    switch (sortMethod) {
      case 'rating-highest': {
        reviewsList.sort((a, b) => {
          const ratingB = +b.rating;
          const ratingA = +a.rating;

          return ratingB - ratingA;
        });
        setSorttedList(reviewsList);
        break;
      }
      case 'rating-lowest': {
        reviewsList.sort((a, b) => {
          const ratingB = +b.rating;
          const ratingA = +a.rating;

          return ratingA - ratingB;
        });
        setSorttedList(reviewsList);
        break;
      }
      case 'date-newest': {
        reviewsList.sort((a, b) => {
          const dateB = new Date(b.date);
          const dateA = new Date(a.date);

          return dateB.getTime() - dateA.getTime();
        });
        setSorttedList(reviewsList);
        break;
      }
      case 'date-oldest': {
        reviewsList.sort((a, b) => {
          const dateB = new Date(b.date);
          const dateA = new Date(a.date);
          return dateA.getTime() - dateB.getTime();
        });
        setSorttedList(reviewsList);
        break;
      }
    }
    setForceRefresh(e => !e);
  };

  let listContent = <h2 className="reviews-list__no-content">No reviews</h2>;

  if (reviews.length > 0) {
    listContent = (
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
    );
  }

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
          <option value="rating-highest">Rating (Highest)</option>
          <option value="rating-lowest">Rating (Lowest)</option>
          <option value="date-newest">Date (Newest)</option>
          <option value="date-oldest">Date (Oldest)</option>
        </select>

        <Link to="new" className="reviews-list__link">
          Add Review
        </Link>
      </div>
      {listContent}
    </section>
  );
};

export default ReviewsList;
