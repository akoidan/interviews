import { findMaxAverage } from "./maximum-average-subarray-i";

describe("maximum-average-subarray-i", () => {
  it("[1,12,-5,-6,50,3] k=4 -> 12.75", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  it("[5] k=1 -> 5", () => {
    expect(findMaxAverage([5], 1)).toBe(5);
  });

  it("[0,4,0,3,2] k=1 -> 4", () => {
    expect(findMaxAverage([0, 4, 0, 3, 2], 1)).toBe(4);
  });

  it("[0,4,0,3,2] k=2 -> 3.5", () => {
    expect(findMaxAverage([0, 4, 0, 3, 2], 2)).toBe(2.5);
  });

  it("all negatives [-1,-2,-3] k=2 -> -1.5", () => {
    expect(findMaxAverage([-1, -2, -3], 2)).toBe(-1.5);
  });

  it("k equals length [1,2,3] k=3 -> 2", () => {
    expect(findMaxAverage([1, 2, 3], 3)).toBe(2);
  });
});
