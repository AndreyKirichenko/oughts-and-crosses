import  Computer from '../services/Computer';
import Referee from '../services/Referee';


const awardToComputer = () => {
  return {
    type: 'AWARD_TO_COMPUTER',
  };
};

const awardToUser = () => {
  return {
    type: 'AWARD_TO_USER',
  };
};

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

const endGameInTie = () => {
  return {
    type: 'END_GAME_IN_TIE',
  };
};

const endGameWithUserWin = () => {
  return {
    type: 'END_GAME_WITH_USER_WIN',
  };
};

const endGameWithComputerWin = () => {
  return {
    type: 'END_GAME_WITH_COMPUTER_WIN',
  };
};

const gameLoop = (dispatch, game) => () => {
  const { board, isChecked, isUserTurns, isFinished } = game;

  if(isFinished) {
    return;
  }

  if(isChecked && !isUserTurns) {
    const newTurn = Computer.turn(board);
    dispatch(computerTurn(newTurn));
  } else {
    const result = Referee.ump(board);
    const { win, tie } = result;

    if(tie) {
      dispatch(endGameInTie());
    } else if(win && win.winner === game.userRole){
      dispatch(endGameWithUserWin());
      dispatch(awardToUser());
    } else if(win && win.winner === game.computerRole) {
      dispatch(endGameWithComputerWin());
      dispatch(awardToComputer());
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
  pickCross,
  pickOught,
  startGame,
  userTurn,
  gameLoop,
};
