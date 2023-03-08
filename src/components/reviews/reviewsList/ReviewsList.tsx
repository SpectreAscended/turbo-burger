import React from 'react';
import './reviewsList.scss';
import { DUMMY_REVIEWS } from '../../../store/dummyData';

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
              <h3>{review.title}</h3>
              <span>{review.rating}</span>
              <p>{review.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
