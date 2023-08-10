import { expect } from "chai";
import { findSmallest } from "../ts/smallestInt";


describe("smallestInt", () => {
  it("should give correct result", () => {
    expect(findSmallest( [1, 3, 6, 4, 1, 2])).be.eq(5);
    expect(findSmallest( [1,2,3])).be.eq(4);
    expect(findSmallest( [-1, -3])).be.eq(1);
    expect(findSmallest( [])).be.eq(1);
    expect(findSmallest( [0])).be.eq(1);
    expect(findSmallest( [0,10000])).be.eq(1);
    expect(findSmallest( [-1, 1])).be.eq(2);
    expect(findSmallest( [-1, 4])).be.eq(1);
  });

});
