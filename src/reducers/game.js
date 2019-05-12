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
  isStarted: false,
  isUserTurns: true,
  isChecked: false,
  message: 'Let\'s play!',
  user: 'cross',
};

const startGame = (game) => {
  const message = `You play ${game.user}`;
  return {
    ...game,
    board: getEmptyBoard(),
    isStarted: true,
    message,
  };
};

const userTurn = (game, turnData) => {
  console.log(turnData, game.user);
  const { board, isUserTurns } = game;

  if(!isUserTurns) {
    return {
      ...game,
    };
  }

  const index = getFieldIndex(board, turnData);
  const field = board[index];

  if(field.value) {
    return {
      ...game,
      message: 'This field is used!',
    };
  }

  const newField = {
    ...field,
    value: game.user,
  };

  const newBoard = [
    ...board.slice(0, index),
    newField,
    ...board.slice(index + 1),
  ];

  return {
    ...game,
    board: newBoard,
    isUserTurns: false,
    message: 'Computer thinks...',
  };
};

const getFieldIndex = (board, turnData) => {
  return board.findIndex((field) => {

    return field.x === turnData.x && field.y === turnData.y;
  });
};

const updateBoard = (board, x, y) => {

};


const score = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case 'PICK_CROSS':
    return {
      ...state.game,
      computer: 'ought',
      user: 'cross',
      isUserTurns: true,
    };

  case 'PICK_OUGHT':
    return {
      ...state.game,
      computer: 'cross',
      user: 'ought',
      isUserTurns: false,
    };

  case 'START_GAME':
    console.log('start game');
    return startGame(state.game);

  case 'END_GAME':
    return {
      ...state.game,
      isStarted: false,
      message: action.payload ? 'You are winner!' : 'Game over',
    };

  case 'USER_TURN':
    return userTurn(state.game, action.payload);

  default:
    return state.game;
  }
};

export default score;
