import React from 'react';
import './reviewsList.scss';
import { DUMMY_REVIEWS } from '../../../store/dummyData';
import ReviewItem from '../reviewItem/ReviewItem';

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
            <ReviewItem
              key={review.id}
              title={review.title}
              userName={review.userName}
              rating={review.rating}
              description={review.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
