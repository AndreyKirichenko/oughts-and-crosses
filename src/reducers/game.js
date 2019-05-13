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
  isChecked: true,
  message: 'Let\'s play!',
  user: 'cross',
};

const startGame = (game) => {
  let message = `You play ${game.user}.`;

  if(!game.isUserTurns) {
    message += ' Computer is going first...';
  }

  return {
    ...game,
    board: getEmptyBoard(),
    isStarted: true,
    message,
  };
};

const userTurn = (game, turnData) => {
  const { board, isUserTurns, user } = game;

  if(!isUserTurns) {
    return {
      ...game,
    };
  }

  const newBoard = getNewTurnBoard(board, turnData, user);

  if(!newBoard) {
    return {
      ...game,
      message: 'This field is used!',
    };
  }

  return {
    ...game,
    board: newBoard,
    isUserTurns: false,
    isChecked: false,
    message: 'Computer thinks...',
  };
};

const computerTurn = (game, turnData) => {
  const { board, isUserTurns, computer } = game;

  if(isUserTurns) {
    return {
      ...game,
    };
  }

  const newBoard = getNewTurnBoard(board, turnData, computer);

  if(!newBoard) {
    return {
      ...game,
    };
  }

  return {
    ...game,
    board: newBoard,
    isUserTurns: true,
    isChecked: false,
    message: 'Your turn...',
  };
};

const refereeTurn = (game) => {
  return {
    ...game,
    isChecked: true,
  };
};

const getNewTurnBoard = (board, turnData, fieldValue) => {
  const index = getFieldIndex(board, turnData);
  const field = board[index];

  if(field.value) {
    return false;
  }

  const newField = {
    ...field,
    value: fieldValue,
  };

  return [
    ...board.slice(0, index),
    newField,
    ...board.slice(index + 1),
  ];
};

const getFieldIndex = (board, turnData) => {
  return board.findIndex((field) => {

    return field.x === turnData.x && field.y === turnData.y;
  });
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
    return startGame(state.game);

  case 'END_GAME':
    return {
      ...state.game,
      isStarted: false,
      message: action.payload ? 'You are winner!' : 'Game over',
    };

  case 'USER_TURN':
    return userTurn(state.game, action.payload);

  case 'COMPUTER_TURN':
    return computerTurn(state.game, action.payload);

  case 'REFEREE_TURN':
    return refereeTurn(state.game);

  default:
    return state.game;
  }
};

export default score;
