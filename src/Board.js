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

  // move playing user/ai
  movePlayer = (x, y, player, cb) => {
    this.board[x][y] = player;
    console.log(this.board);
    typeof cb === 'function' && cb();
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

  // // TODO: check rows, columns, diagonals
  // checkWin = () => {
  //   console.log('TODO: check win');
  // };
}
