import React from 'react';
import { Link, useSubmit } from 'react-router-dom';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import './reviewDetail.scss';

interface ReviewDetailProps {
  review: IReviewItem;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ review }) => {
  const submit = useSubmit();

  const deleteEventHandler = () => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <article>
      <h1>{review.title}</h1>
      <p>{review.rating}/5</p>
      <p>{review.userName}</p>
      <p>{review.description}</p>
      <Link to="..">Back to Reviews</Link>
      <button onClick={deleteEventHandler}>Delete</button>
    </article>
  );
};

export default ReviewDetail;
