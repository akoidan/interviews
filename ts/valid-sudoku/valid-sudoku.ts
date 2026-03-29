/*
  https://neetcode.io/problems/valid-sudoku

  You are given a 9 x 9 Sudoku board. A Sudoku board is valid if the following rules are followed:

  Each row must contain the digits 1-9 without duplicates.
  Each column must contain the digits 1-9 without duplicates.
  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
  Return true if the Sudoku board is valid, otherwise return false

  Note: A board does not need to be full or be solvable to be valid.
 */

export function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(9).fill(0);
  const cols = new Array(9).fill(0);
  const boxes = new Array(9).fill(0);

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      const currentValue = parseInt(board[r][c], 10);
      if (isNaN(currentValue)) continue;
      let val =  currentValue - 1;
      /*
        0 1 2
        3 4 5
        6 7 8
      */
      const boxesI = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      const mask = 1 << val;
      if (rows[r] & mask) {
        console.log(`row ${r} has already number ${currentValue}`)
        return false;
      }
      if (cols[c] & mask) {
        console.log(`col ${c} has already number ${currentValue}`)
        return false;
      }
      if (boxes[boxesI] & mask) {
        console.log(`square in ${r}x${c} has already number ${currentValue}`)
        return false
      }
      rows[r] |= mask;
      cols[c] |= mask;
      boxes[boxesI] |= mask;
    }
  }
  return true;
}
