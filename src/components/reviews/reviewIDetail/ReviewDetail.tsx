import { useState } from 'react';
import { Link, useSubmit } from 'react-router-dom';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { ReviewItem as IReviewItem } from '../../../pages/reviews/Reviews';
import { AnimatePresence } from 'framer-motion';
import Modal from '../../UI/modal/modal/Modal';
import formatDate from '../../../utlities/formatDate';
import './reviewDetail.scss';

interface ReviewDetailProps {
  review: IReviewItem;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ review }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const submit = useSubmit();
  const uid = useSelector<RootState>(state => state.auth.currentUser.uid);

  // const usersPost = uid === review.uid && uid !== undefined;

  // TODOLEC  TEMP!!!
  const usersPost = true;

  const cancelDeleteHandler = () => {
    setModalOpen(false);
  };

  // TODO add token loader to this
  const confirmDeleteHandler = () => {
    submit(null, { method: 'delete' });
  };

  const deleteEventHandler = () => {
    if (!usersPost) return;
    setModalOpen(true);
  };

  const date = formatDate(review.date);

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
      <section>
        <article className="review-detail">
          <h1 className="review-detail__heading">{review.title}</h1>
          <div className="review-detail__header">
            <div className="review-detail__user-data">
              <p className="review-detail__userName">{review.userName}</p>
              <p className="review-detail__date">{date}</p>
            </div>
            <span className="review-detail__rating">{review.rating}/5</span>
          </div>
          <p className="review-detail__description">{review.description}</p>
          <div className="review-detail__actions">
            <Link to=".." className="review-detail__link review-detail__back">
              Back to Reviews
            </Link>
            {usersPost && (
              <>
                <Link to="edit" className="review-detail__edit">
                  Edit Review
                </Link>
                <button
                  onClick={deleteEventHandler}
                  className="review-detail__delete"
                >
                  Delete Review
                </button>
              </>
            )}
          </div>
        </article>
      </section>
    </>
  );
};

export default ReviewDetail;
