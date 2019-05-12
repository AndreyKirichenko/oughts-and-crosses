const getEmptyBoard = () => {
  const board = [];

  for(let x = 0; x < 3; x++) {
    for(let y = 0; y < 3; y++) {
      board.push({
        x,
        y,
        value: null,
      });
    }
  }

  return board;
};

const initialState = {
  board: getEmptyBoard(),
  computer: 'ought',
  user: 'cross',
  isStarted: false,
};

const score = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case 'PICK_CROSS':
    return {
      ...state.score,
      board: getEmptyBoard(),
      computer: 'cross',
      user: 'ought',
    };

  case 'PICK_OUGHT':
    return {
      ...state.score,
      board: getEmptyBoard(),
      computer: 'ought',
      user: 'cross',
    };

  default:
    return state.score;
  }
};

export default score;
