import {levelOrder, TreeNode} from "./binary-tree-level-order-traversal";




function treeToArr(node: TreeNode | null): number[] {
  const result: number[] = [];
  return result;
}

test("ex2 ", () => {
  expect(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))).toEqual([[3],[9,20],[15,7]]);
});

test("ex1 ", () => {
  expect(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))).toEqual([[3],[9,20],[15,7]]);
});
