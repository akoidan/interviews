import {TreeNode} from "@/leetcode/tree";


export function kthSmallest(root: TreeNode, k: number): number {
  let stack: TreeNode[] = [];
  let n: number = 0;
  let cur: TreeNode|null = root;
  while (cur ||  stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left;
    }
    cur = stack.pop()!;
    n++;

    if (n == k) {
      return cur.val;
    }
    cur = cur.right;
  }
  return 0;
}
