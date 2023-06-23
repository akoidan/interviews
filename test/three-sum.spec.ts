import {expect} from "chai";
import {threeSum} from "../src/leetcode/thre-sum";
import * as threeSummValues from "./three-sum.json"

describe("three sum", () => {
  it("[-1,0,1,2,-1,-4] -> 9", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).deep.eq([[-1, -0, 1], [-1, -1, 2]])
  });
  it("[0,0....0] -> do not out of memory", () => {
    expect(threeSum(new Array(3000).fill(0))).deep.eq([[0, 0, 0]])
  });
  it("huge example 1", () => {
    expect(threeSum(threeSummValues as [])).deep.eq([[0, 0, 0]])
  });
  it("huge example 2", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).deep.eq([[-1, -1, 2], [-1, 0, 1]])
  });
  it("huge example 3", () => {
    expect(threeSum([1, 2, -2, -1])).deep.eq([])
  });

});
