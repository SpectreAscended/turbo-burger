import React from 'react';
import { Link } from 'react-router-dom';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import './reviewDetail.scss';

interface ReviewDetailProps {
  review: IReviewItem;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ review }) => {
  return (
    <article>
      <h1>{review.title}</h1>
      <p>{review.rating}/5</p>
      <p>{review.userName}</p>
      <p>{review.description}</p>
      <Link to="..">Back to Reviews</Link>
    </article>
  );
};

export default ReviewDetail;
