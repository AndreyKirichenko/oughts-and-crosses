const referee = (board) => {
  const lines = [
    ...getHorizontalLines(board),
    ...getVerticalLines(board),
    getDiagonal1(board),
    getDiagonal2(board),
  ];

  return lines.filter((line) => {
    return isTheSame(line);
  });
};

const isTheSame = (line) => {
  const firstValue = line[0].value;

  if (!firstValue) {
    return null;
  }

  const checkedLine = line.filter((field) => {
    return field.value === firstValue;
  });

  if(checkedLine.length === 3) {
    return line;
  }

  return null;
};

const getHorizontalLines = (board) => {
  const lines = [];

  for(let y = 0; y < 3; y++) {
    const line = board.filter((field) => {
      return field.y === y;
    });
    lines.push(line);
  }

  return lines;
};

const getVerticalLines = (board) => {
  const lines = [];

  for(let x = 0; x < 3; x++) {
    const line = board.filter((field) => {
      return field.x === x;
    });
    lines.push(line);
  }

  return lines;
};

const getDiagonal1 = (board) => {
  return [
    board[0],
    board[4],
    board[8],
  ];
};

const getDiagonal2 = (board) => {
  return [
    board[2],
    board[4],
    board[6],
  ];
};

export default referee;
