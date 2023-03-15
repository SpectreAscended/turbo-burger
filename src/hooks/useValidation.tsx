import { useState, useEffect } from 'react';

type Validate = (a: string) => boolean;

const useValidation = (
  validate: Validate,
  defaultInput: string | undefined = undefined
) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [interacted, setInteracted] = useState(false);

  // validate will return true or false depending on condition in function passed into hook.

  useEffect(() => {
    if (defaultInput) {
      setInteracted(false);
      setEnteredValue(defaultInput);
    }
  }, []);

  const isValid = validate(enteredValue);

  const hasError = interacted && !isValid;

  const enteredValueHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInteracted(false);
    setEnteredValue(e.currentTarget.value);
  };

  const inputBlurHandler = () => {
    setInteracted(true);
  };

  const resetValuesHandler = () => {
    setInteracted(false);
    setEnteredValue('');
  };

  return {
    enteredValueHandler,
    inputBlurHandler,
    resetValuesHandler,
    isValid,
    enteredValue,
    hasError,
  };
};

export default useValidation;
