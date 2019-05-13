import  { computer as computerPlayer } from '../services/computer';
import referee from '../services/referee';


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
  const { board, computer, isChecked, isUserTurns } = game;

  if(isChecked && !isUserTurns) {
    const newTurn = computerPlayer(board, computer);
    dispatch(computerTurn(newTurn));
  }

  if(!isChecked) {
    const result = referee(board);
    if(result.length) {
      console.log('win', result);
    } else {
      dispatch(refereeTurn());
    }
  }
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

const refereeTurn = () => {
  return {
    type: 'REFEREE_TURN',
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
