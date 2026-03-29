import { findSmallest } from "./smallestInt";


describe("smallestInt", () => {
  it("should give correct result", () => {
    expect(findSmallest( [1, 3, 6, 4, 1, 2])).toBe(5);
    expect(findSmallest( [1,2,3])).toBe(4);
    expect(findSmallest( [-1, -3])).toBe(1);
    expect(findSmallest( [])).toBe(1);
    expect(findSmallest( [0])).toBe(1);
    expect(findSmallest( [0,10000])).toBe(1);
    expect(findSmallest( [-1, 1])).toBe(2);
    expect(findSmallest( [-1, 4])).toBe(1);
  });

});
