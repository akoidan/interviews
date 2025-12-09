export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}


export class Solution {
  maxDepth(root: TreeNode | null): number {
    const stack: { depth: number, el: TreeNode }[] = [];
    if (root) {
      stack.push({el: root, depth: 1})
    }
    let res  = 0;
    while (stack.length) {
      const {el, depth} = stack.pop()!;
      res = Math.max(res, depth)
      if (el.left) {
        stack.push({el: el.left, depth: depth + 1})
      }
      if (el.right) {
        stack.push({el: el.right, depth: depth + 1})
      }
    }
    return res;
  }
}
