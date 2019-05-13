class Board {
  static getHorizontalLines(board) {
    const lines = [];

    for(let y = 0; y < 3; y++) {
      const line = board.filter((field) => {
        return field.y === y;
      });
      lines.push(line);
    }

    return lines;
  }

  static getVerticalLines(board) {
    const lines = [];

    for(let x = 0; x < 3; x++) {
      const line = board.filter((field) => {
        return field.x === x;
      });
      lines.push(line);
    }

    return lines;
  }

  static getDiagonal1(board) {
    return [
      board[0],
      board[4],
      board[8],
    ];
  }

  static getDiagonal2(board) {
    return [
      board[2],
      board[4],
      board[6],
    ];
  }

  static findEmptyFields(fields) {
    return fields.filter((field) => {
      return !field.value;
    });
  }
}

export default Board;
