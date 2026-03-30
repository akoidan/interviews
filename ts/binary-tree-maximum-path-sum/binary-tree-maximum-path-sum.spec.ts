import {maxPathSum, TreeNode} from "./binary-tree-maximum-path-sum";





test("ex1 ", () => {
  let tree = new TreeNode(-10,
      new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

  expect(maxPathSum(tree)).toEqual(42);
});
test("ex2 ", () => {
  let tree = new TreeNode(2, new TreeNode(-1));
  expect(maxPathSum(tree)).toEqual(2);
});

test("ex3 ", () => {
  let tree = arrToTree([9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6], 0)
  expect(maxPathSum(tree)).toEqual(16);
});


test("ex5 ", () => {
  let tree = arrToTree([0,1,1], 0)
  expect(maxPathSum(tree)).toEqual(2);
});

test("ex6 ", () => {
  let tree = arrToTree([-1,8,2,null,-9,0,null,null,null,-3,null,null,-9,null,2], 0)
  expect(maxPathSum(tree)).toEqual(9);
});
