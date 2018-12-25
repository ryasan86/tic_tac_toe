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

  // move playing user
  movePlayer = (x, y, player) => {
    this.board[x][y] = player;
    this.checkWin();
    console.log(this.getOpenCells());
  };

  // determine which cell belongs to player
  getCell = (x, y) => {
    return this.board[x][y];
  };

  // array of playable cells left
  getOpenCells = () => {
    return this.board.reduce((freeCells, row, rowIdx) => {
      for (let colIdx = 0; colIdx < row.length; colIdx++) {
        if (this.board[rowIdx][colIdx] === 0) {
          freeCells.push([rowIdx, colIdx]);
        }
      }
      return freeCells;
    }, []);
  };

  moveAi = () => {};

  // check rows, columns, diagonals
  checkWin = () => {
    console.log('TODO: check win');
  };
}
