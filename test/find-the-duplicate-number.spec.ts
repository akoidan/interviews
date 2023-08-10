import {findDuplicate} from "ts/leetcode/find-the-duplicate-number";
import {expect} from "chai";

describe("find-the-duplicate-number", () => {
  it("[1,3,4,2,2]", () => {
    expect(findDuplicate([1,3,4,2,2])).eq(2)
  });

});

