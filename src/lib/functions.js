export const findPositionById = (array, id) => {
  return array.indexOf(array.find((o) => o._id === id));
};
