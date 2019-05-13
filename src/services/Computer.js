import Board from './Board';

class Computer {
  static turn(board) {
    const emptyFields = Board.findEmptyFields(board);

    const randomIndex = Math.round(Math.random() * (emptyFields.length - 1));

    const { x, y } = emptyFields[randomIndex];

    return { x, y };
  }
}

export default Computer;
