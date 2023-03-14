import { Form, FormMethod, Link, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import useValidation from '../../../hooks/useValidation';
import {
  checkIfEmptyValue,
  checkIfValidRating,
} from '../../../utlities/validators';
import './reviewForm.scss';

interface FormData {
  id: string;
  userName: string;
  rating: number;
  title: string;
  description: string;
}

interface ReviewFormProps {
  method?: FormMethod;
  review?: any;
}

// TODO fix input error styling - margin under inputs
// TODO edit useValidation to recognize when there is a default value to avoid it thinking the value is blank when it isnt.
// TODO FIGURE THIS OUT

//BUG form only works if you are not logged in

const ReviewForm: React.FC<ReviewFormProps> = ({ method = 'post', review }) => {
  const userName = useSelector<RootState>(
    state => state.auth.currentUser.userName
  ) as string;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const {
    enteredValueHandler: nameChangeHandler,
    isValid: nameIsValid,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
  } = useValidation(checkIfEmptyValue);

  const {
    enteredValueHandler: titleChangeHandler,
    isValid: titleIsValid,
    inputBlurHandler: titleBlurHandler,
    hasError: titleHasError,
  } = useValidation(checkIfEmptyValue);

  const {
    enteredValueHandler: ratingChangeHandler,
    isValid: ratingIsValid,
    inputBlurHandler: ratingBlurHandler,
    hasError: ratingHasError,
  } = useValidation(checkIfValidRating);

  const {
    enteredValueHandler: descriptionChangeHandler,
    isValid: descriptionIsValid,
    inputBlurHandler: descriptionBlurHandler,
    hasError: descriptionHasError,
  } = useValidation(checkIfEmptyValue);

  let formIsValid = false;
  formIsValid =
    nameIsValid && titleIsValid && ratingIsValid && descriptionIsValid;

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form method={method} className="review-form">
      <h1 className="review-form__heading">
        {method === 'post' ? 'New' : 'Edit'} review
      </h1>

      <label htmlFor="rating" className="review-form__label">
        Rating out of 5
      </label>
      <input
        type="number"
        min={1}
        max={5}
        step={0.5}
        name="rating"
        className={`review-form__input--rating ${
          ratingHasError ? 'input-error' : ''
        }`}
        onChange={ratingChangeHandler}
        onBlur={ratingBlurHandler}
      />
      {ratingHasError && (
        <p className="form-error">Must be a number between 1 and 5.</p>
      )}

      <label htmlFor="first-name" className="review-form__label">
        First name
      </label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        defaultValue={userName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        className={`review-form__input ${nameHasError ? 'input-error' : ''}`}
      />
      {nameHasError && <p className="form-error">Name cannot be blank.</p>}

      <label htmlFor="title" className="review-form__label">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className={`review-form__input ${titleHasError ? 'input-error' : ''}`}
        onChange={titleChangeHandler}
        onBlur={titleBlurHandler}
      />
      {titleHasError && <p className="form-error">Title cannot be blank.</p>}

      <label htmlFor="description" className="review-form__label">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        rows={5}
        className={`review-form__input ${
          descriptionHasError ? 'input-error' : ''
        }`}
        onChange={descriptionChangeHandler}
        onBlur={descriptionBlurHandler}
      />
      {descriptionHasError && (
        <p className="form-error">Description cannot be blank.</p>
      )}

      <div className="review-form__actions">
        <Link to="/reviews" className="review-form__actions-btn--cancel">
          Cancel
        </Link>
        <button
          type="submit"
          className="review-form__actions-btn--submit"
          disabled={!formIsValid}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </Form>
  );
};

export default ReviewForm;
