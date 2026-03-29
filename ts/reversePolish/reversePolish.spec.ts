import {calculate} from "./reversePolish";

describe("reversePolish.ts", () => {
  it(`["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9`, () => {
    expect(calculate([2, 1, '+', 3, "*"])).toBe(9);
    expect(calculate([3, 4, '-'])).toBe(-1);
    expect(() => {
      calculate([1,2,3])
    }).toThrow(/Invalid reverse polish string/);
    expect(() => {
      calculate([1,2,'-', '*'])
    }).toThrow(/Invalid reverse polish string/);
  });
});
