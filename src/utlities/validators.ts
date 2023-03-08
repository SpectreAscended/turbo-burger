export const checkIfEmptyValue = (value: string) => {
  return value.trim() !== '';
};

export const checkIfValidRating = (value: string) => {
  // Checks if value is between 1 and 5.
  return +value.trim() >= 1 && +value.trim() <= 5 && value.trim() !== '';
};
