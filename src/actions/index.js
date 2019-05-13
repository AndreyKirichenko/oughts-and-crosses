// const fetchData = (dispatch) => () => {
//   const preloadedState = JSON.parse(window.localStorage.getItem('state'));
// };
//
// const awardToComputer = () => {
//   return {
//     type: 'AWARD_TO_COMPUTER'
//   };
// };
//
// const awardToUser = () => {
//   return {
//     type: 'AWARD_TO_USER',
//   };
// };

const pickCross = () => {
  return {
    type: 'PICK_CROSS',
  };
};

const pickOught = () => {
  return {
    type: 'PICK_OUGHT',
  };
};

const startGame = () => {
  return {
    type: 'START_GAME',
  };
};

// const endGame = () => {
//   return {
//     type: 'END_GAME',
//   };
// };

const gameLoop = (dispatch, game) => () => {
  console.log('game', game);
  dispatch(computerTurn({ x: 0, y: 0 }));
};

const userTurn = (turnData) => {
  return {
    type: 'USER_TURN',
    payload: turnData,
  };
};

const computerTurn = (turnData) => {
  return {
    type: 'COMPUTER_TURN',
    payload: turnData,
  };
};

export {
  // awardToComputer,
  // awardToUser,
  pickCross,
  pickOught,
  startGame,
  userTurn,
  gameLoop,
};
