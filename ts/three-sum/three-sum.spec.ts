import {threeSum} from "./three-sum";
import * as threeSummValues from "./three-sum.json"
import * as threeSummResult from "./three-sum-result.json"

describe("three sum", () => {
  it("[-1,0,1,2,-1,-4] -> 9", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -0, 1], [-1, -1, 2]])
  });
  it("[0,0....0] -> do not out of memory", () => {
    expect(threeSum(new Array(3000).fill(0))).toEqual([[0, 0, 0]])
  });
  it("huge example 1", () => {
    console.log(performance.now())
    const val = threeSum(threeSummValues as []);
    console.log(performance.now())
    expect(val).toEqual(threeSummResult)
  });
  it("huge example 2", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]])
  });
  it("huge example 3", () => {
    expect(threeSum([1, 2, -2, -1])).toEqual([])
  });

});
