import {expect} from "chai";
import {calculate} from "../ts/reversePolish";

describe("reversePolish.ts", () => {
  it(`["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9`, () => {
    expect(calculate([2, 1, '+', 3, "*"])).be.eq(9);
    expect(calculate([3, 4, '-'])).be.eq(-1);
    expect(() => {
      calculate([1,2,3])
    }).to.throw(/Invalid reverse polish string/);
    expect(() => {
      calculate([1,2,'-', '*'])
    }).to.throw(/Invalid reverse polish string/);
  });
});
