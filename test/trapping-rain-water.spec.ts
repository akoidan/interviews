import { expect } from "chai";
import { maxArea } from "../src/leetcode/container-with-most-water";


describe("container-with-most-water", () => {
  it("[1,8,6,2,5,4,8,3,7] = 49", () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).eq(49)
  });
});




