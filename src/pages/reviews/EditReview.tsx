import ReviewForm from '../../components/reviews/reviewForm/ReviewForm';

// TODO load the review or accept in props and add to ReviewForm attributes
const EditReviewPage: React.FC = () => {
  return <ReviewForm method="patch" />;
};

export default EditReviewPage;
