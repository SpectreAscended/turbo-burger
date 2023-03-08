import { Form, FormMethod, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import useValidation from '../../../hooks/useValidation';
import {
  checkIfEmptyValue,
  checkIfValidRating,
} from '../../../utlities/validators';
import './reviewForm.scss';

interface ReviewFormProps {
  method?: FormMethod;
  review?: any;
}

// TODO fix input error styling - margin under inputs

const ReviewForm: React.FC<ReviewFormProps> = ({ method = 'post', review }) => {
  const userName = useSelector<RootState>(
    state => state.auth.userName
  ) as string;

  const {
    enteredValueHandler: nameChangeHandler,
    enteredValue: enteredName,
    isValid: nameIsValid,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
  } = useValidation(checkIfEmptyValue);

  const {
    enteredValueHandler: titleChangeHandler,
    enteredValue: enteredTitle,
    isValid: titleIsValid,
    inputBlurHandler: titleBlurHandler,
    hasError: titleHasError,
  } = useValidation(checkIfEmptyValue);

  const {
    enteredValueHandler: ratingChangeHandler,
    enteredValue: enteredRating,
    isValid: ratingIsValid,
    inputBlurHandler: ratingBlurHandler,
    hasError: ratingHasError,
  } = useValidation(checkIfValidRating);

  const {
    enteredValueHandler: descriptionChangeHandler,
    enteredValue: enteredDescription,
    isValid: descriptionIsValid,
    inputBlurHandler: descriptionBlurHandler,
    hasError: descriptionHasError,
  } = useValidation(checkIfEmptyValue);

  const formIsValid =
    nameIsValid && titleIsValid && ratingIsValid && descriptionIsValid;

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form method={method} className="review-form" onSubmit={submitFormHandler}>
      <h1 className="review-form__heading">
        {method === 'post' ? 'New' : 'Edit'} review
      </h1>

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

      <label htmlFor="rating" className="review-form__label">
        Rating out of 5
      </label>
      <input
        type="number"
        min={1}
        max={5}
        step={0.5}
        placeholder="5"
        className={`review-form__input--rating ${
          ratingHasError ? 'input-error' : ''
        }`}
        onChange={ratingChangeHandler}
        onBlur={ratingBlurHandler}
      />
      {ratingHasError && (
        <p className="form-error">Must be a number between 1 and 5.</p>
      )}
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
          Submit
        </button>
      </div>
    </Form>
  );
};

export default ReviewForm;
