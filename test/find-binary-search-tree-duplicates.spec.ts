import {expect} from "chai";
import {
  findMode,
  TreeNode
} from "../src/leetcode/find-finary-search-tree-duplicates";

describe("find-binary-search-tree-duplicates.spec", () => {
  it("[1,null,2,2] == [2]", () => {
    // 1,2,3,5,7,9,11
    expect(findMode(new TreeNode(1,
      null, new TreeNode(2,
        new TreeNode(2, null, null), null))
    )).to.deep.eq([2]);
  });
  it("[0] == [0]", () => {
    // 1,2,3,5,7,9,11
    expect(findMode(new TreeNode(0, null,null))).to.deep.eq([0]);
  });
});
