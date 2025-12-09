

 export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
 }


export class Solution {
  maxDepth(root: TreeNode|null): number {
    if (!root) {
      return 0;
    }
    return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
  }
}
