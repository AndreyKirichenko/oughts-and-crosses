const getEmptyBoard = () => {
  const board = [];

  for(let x = 0; x < 3; x++) {
    for(let y = 0; y < 3; y++) {
      board.push({
        x,
        y,
        value: null,
        winner: false,
      });
    }
  }

  return board;
};

const initialState = {
  board: getEmptyBoard(),
  computerRole: 'ought',
  isChecked: true,
  isFinished: false,
  isStarted: false,
  isUserTurns: true,
  message: 'Let\'s play!',
  userRole: 'cross',
};

const startGame = (game) => {
  let message = `You play ${game.userRole}.`;

  if(!game.isUserTurns) {
    message += ' Computer is going first...';
  }

  return {
    ...game,
    board: getEmptyBoard(),
    isStarted: true,
    isFinished: false,
    message,
  };
};

const endGameInTie = (game) => {
  return {
    ...game,
    isFinished: true,
    message: 'Game finished in tie',
  };
};

const endGameWithUserWin = (game, winnerLine) => {
  return endGameWithWin(game, winnerLine, 'You won!');
};

const endGameWithComputerWin = (game, winnerLine) => {
  return endGameWithWin(game, winnerLine, 'You loose!');
};

const endGameWithWin = (game, winnerLine, message) => {
  const { board } = game;
  const newBoard = markWinnerFields(board, winnerLine);

  return {
    ...game,
    board: newBoard,
    isFinished: true,
    message,
  };
};

const markWinnerFields = (board, winnerLine) => {
  return board.map((field) => {
    winnerLine.forEach((winnerField) => {
      if(winnerField.x === field.x && winnerField.y === field.y) {
        field.winner = true;
      }
    });
    return field;
  });
};

const userTurn = (game, turnData) => {
  const { board, isUserTurns, userRole, isFinished } = game;

  if(!isUserTurns || isFinished) {
    return {
      ...game,
    };
  }

  const newBoard = getNewTurnBoard(board, turnData, userRole);

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
  const { board, isUserTurns, computerRole, isFinished } = game;

  if(isUserTurns || isFinished) {
    return {
      ...game,
    };
  }

  const newBoard = getNewTurnBoard(board, turnData, computerRole);

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
      computerRole: 'ought',
      userRole: 'cross',
      isUserTurns: true,
    };

  case 'PICK_OUGHT':
    return {
      ...state.game,
      computerRole: 'cross',
      userRole: 'ought',
      isUserTurns: false,
    };

  case 'START_GAME':
    return startGame(state.game);

  case 'END_GAME_IN_TIE':
    return endGameInTie(state.game);

  case 'END_GAME_WITH_USER_WIN':
    return endGameWithUserWin(state.game, action.payload);

  case 'END_GAME_WITH_COMPUTER_WIN':
    return endGameWithComputerWin(state.game, action.payload);

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
