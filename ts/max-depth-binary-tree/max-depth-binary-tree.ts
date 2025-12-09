

 export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
 }


export class Solution {
  // DFS
  // maxDepth(root: TreeNode|null): number {
  //   if (!root) {
  //     return 0;
  //   }
  //   return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
  // }

  maxDepth(root: TreeNode|null): number {
    if (!root) {
      return 0;
    }
    const q: TreeNode[] = [root]
    let level = 0;
    while (q.length > 0) {
      let initialLength = q.length;
      for (let i = 0; i < initialLength; i++) {
        let node = q.shift()!;
        if (node.left) {
          q.push(node.left)
        }
        if (node.right) {
          q.push(node.right)
        }
      }
      level++;
    }
    return level;
  }
}
