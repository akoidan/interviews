import {getSum} from "./letcode-sorted-index";

describe("letcode index", () => {
  it("should return correct value", () => {
    expect(getSum([1,2,3,4,5,6,14,5], 19)).toEqual([4,6]);
  });
});
