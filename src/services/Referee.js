import Board from './Board';

class Referee {
  static ump(board) {
    const win = Referee.checkWin(board);

    let tie = null;

    if(!win) {
      tie = Referee.checkTie(board);
    }

    return {
      win,
      tie,
    };
  }

  static checkWin(board) {
    const lines = [
      ...Board.getHorizontalLines(board),
      ...Board.getVerticalLines(board),
      Board.getDiagonal1(board),
      Board.getDiagonal2(board),
    ];

    const winnerLines =  lines.filter((line) => {
      return Referee.isTheSame(line);
    });

    if(winnerLines.length) {
      return {
        winnerLines,
        winner: winnerLines[0][0].value,
      };
    }

    return null;
  }

  static checkTie(board) {
    const emptyFields = Board.findEmptyFields(board);
    return !emptyFields.length;
  }

  static isTheSame(line) {
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
  }
}

export default Referee;
