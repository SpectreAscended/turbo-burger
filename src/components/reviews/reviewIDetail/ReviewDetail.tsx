import { useState } from 'react';
import { Link, useSubmit } from 'react-router-dom';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import { AnimatePresence } from 'framer-motion';
import Modal from '../../UI/modal/modal/Modal';
import './reviewDetail.scss';

interface ReviewDetailProps {
  review: IReviewItem;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ review }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const submit = useSubmit();
  const uid = useSelector<RootState>(state => state.auth.currentUser.uid);

  const usersPost = uid === review.uid && uid !== undefined;

  const cancelDeleteHandler = () => {
    setModalOpen(false);
  };

  // TODO add token loader to this
  let confirmDeleteHandler = () => {
    submit(null, { method: 'delete' });
  };

  const deleteEventHandler = () => {
    if (!usersPost) return;
    setModalOpen(true);
  };

  return (
    <>
      <AnimatePresence initial={false} mode="sync">
        {modalOpen && (
          <Modal
            title="Delete Review"
            text="Are you sure?"
            handleClose={cancelDeleteHandler}
            onConfirm={confirmDeleteHandler}
            modalOpen={modalOpen}
            type="prompt"
          />
        )}
      </AnimatePresence>
      <article className="review-detail">
        <h1>{review.title}</h1>
        <p>{review.rating}/5</p>
        <p>{review.userName}</p>
        <p>{review.description}</p>
        <Link to="..">Back to Reviews</Link>
        {usersPost && (
          <div>
            <Link to="/edit" className="review-detail__edit">
              Edit Review
            </Link>
            <button
              onClick={deleteEventHandler}
              className="review-detail__delete"
            >
              Delete Review
            </button>
          </div>
        )}
      </article>
    </>
  );
};

export default ReviewDetail;
