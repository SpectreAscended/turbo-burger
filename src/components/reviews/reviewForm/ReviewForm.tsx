import { Form, FormMethod, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import './reviewForm.scss';

interface ReviewFormProps {
  method?: FormMethod;
  review?: any;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ method, review }) => {
  const userName = useSelector<RootState>(
    state => state.auth.userName
  ) as string;

  return (
    <Form method={method} className="review-form">
      <h1 className="review-form__heading">New review</h1>
      <label htmlFor="first-name" className="review-form__label">
        First name
      </label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        value={userName}
        className="review-form__input"
      />
      <label htmlFor="rating" className="review-form__label">
        Rating out of 5
      </label>
      <input
        type="number"
        min={1}
        max={5}
        step={0.5}
        className="review-form__input--rating"
      />
      <label htmlFor="title" className="review-form__label">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="review-form__input"
      />
      <label htmlFor="description" className="review-form__label">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        rows={5}
        className="review-form__description"
      />
      <div className="review-form__actions">
        <Link to="/reviews" className="review-form__actions-btn--cancel">
          Cancel
        </Link>
        <button type="submit" className="review-form__actions-btn--submit">
          Submit
        </button>
      </div>
    </Form>
  );
};

export default ReviewForm;
