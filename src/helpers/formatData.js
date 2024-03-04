export const formatData = (data) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return data.toLocaleDateString('en-US', options);
};
