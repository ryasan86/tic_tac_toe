export default class Board {
  constructor() {
    this.board = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(0);
      }
      this.board.push(row);
    }
  }

  movePlayer = (x, y, player) => {
    this.board[x][y] = player;
  };

  getCell = (x, y) => {
    return this.board[x][y];
  };
}
