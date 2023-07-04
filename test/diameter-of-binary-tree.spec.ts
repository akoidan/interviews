import { expect } from "chai";
import { diameterOfBinaryTree } from "../src/leetcode/diameter-of-binary-tree";
import {convertArrayToTree} from "src/leetcode/tree";


describe("diameter-of-binary-tree.spec", () => {
  it("8", () => {
   let tree = convertArrayToTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])
    expect(diameterOfBinaryTree(tree)).eq(8)
  });
  it("1", () => {
    let tree = convertArrayToTree([1,2])
    expect(diameterOfBinaryTree(tree)).eq(1)
  });
});




