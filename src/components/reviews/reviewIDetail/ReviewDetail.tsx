import React from 'react';
import { Link, useSubmit } from 'react-router-dom';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import './reviewDetail.scss';

interface ReviewDetailProps {
  review: IReviewItem;
}

// TODO Make modal for this proceed window

const ReviewDetail: React.FC<ReviewDetailProps> = ({ review }) => {
  const submit = useSubmit();
  const uid = useSelector<RootState>(state => state.auth.currentUser.uid);

  const usersPost = uid === review.uid && uid !== undefined;

  const deleteEventHandler = () => {
    if (!usersPost) return;

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
      {usersPost && <button onClick={deleteEventHandler}>Delete</button>}
    </article>
  );
};

export default ReviewDetail;
