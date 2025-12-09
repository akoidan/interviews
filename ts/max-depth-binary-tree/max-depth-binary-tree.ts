

 interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
 }


class Solution {
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
    let level = 1;
    while (q.length > 0) {
      for (const el in q) {
        let node = q.shift()!;
        if (node.left) {
          q.push(node.left)
        }
        if (node.right) {
          q.push(node.right)
        }
      }
      level ++;
    }
    return level;
  }
}
