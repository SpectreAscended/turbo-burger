const formatDate = (inputDate: string | Date) => {
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return formattedDate;
};

export default formatDate;
