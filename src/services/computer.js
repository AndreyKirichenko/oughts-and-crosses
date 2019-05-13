const computer = (board) => {

  const emptyFields = findEmptyFields(board);

  const randomIndex = Math.round(Math.random() * (emptyFields.length - 1));

  const { x, y } = emptyFields[randomIndex];

  return { x, y };
};

const findEmptyFields = (board) => {
  return board.filter((field) => {
    return !field.value;
  });
};

export default computer;
