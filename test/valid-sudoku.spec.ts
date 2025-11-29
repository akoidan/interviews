import * as chaiAsPromised from "chai-as-promised"; // eslint-disable-line import/no-namespace
import * as sinonChai from "sinon-chai"; // eslint-disable-line import/no-namespace
import {expect, use} from "chai";
import {isValidSudoku} from "../ts/leetcode/valid-sudoku";

use(sinonChai);
use(chaiAsPromised);

describe("median two arrays", () => {
  it("example 1", () => {
    expect(isValidSudoku([["1","2",".",".","3",".",".",".","."],
      ["4",".",".","5",".",".",".",".","."],
      [".","9","8",".",".",".",".",".","3"],
      ["5",".",".",".","6",".",".",".","4"],
      [".",".",".","8",".","3",".",".","5"],
      ["7",".",".",".","2",".",".",".","6"],
      [".",".",".",".",".",".","2",".","."],
      [".",".",".","4","1","9",".",".","8"],
      [".",".",".",".","8",".",".","7","9"]])).to.be.be.eq(true);
  })
});

