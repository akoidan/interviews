import {expect} from "chai";
import {twoSum} from "../src/leetcode/two-sum";

describe("two sum", () => {
  it("[2,7,11,15] -> 9", () => {
    expect(twoSum([2,7,11,15], 9)).deep.eq([0,1])
  });
  it("throws", () => {
    expect(() => twoSum([2,7,11,15], 232)).to.throw("No such elements")
  });
});
