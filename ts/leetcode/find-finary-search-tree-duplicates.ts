/* https://leetcode.com/problems/find-mode-in-binary-search-tree/
501. Find Mode in Binary Search Tree
Easy
2.9K
659
Companies
Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:


Input: root = [1,null,2,2]
Output: [2]
Example 2:

Input: root = [0]
Output: [0]
 */




export class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

export function findMode(root: TreeNode | null): number[] {
  let arr: TreeNode[] = [];
  arr.push(root!);
  let occurences: Map<number, number> = new Map();
  let bigestCount = 0;
  let biggestNumbers: number[] = [];
  while (arr.length) {
    let curEl = arr.pop()!;
    let newVal = (occurences.get(curEl.val) || 0) + 1;
    if (bigestCount < newVal) {
      bigestCount = newVal;
      biggestNumbers = [curEl.val]
    } else if (bigestCount === newVal) {
      biggestNumbers.push(curEl.val)
    }
    occurences.set(curEl.val, newVal);
    if (curEl.left) {
      arr.push(curEl.left)
    }
    if (curEl.right) {
      arr.push(curEl.right)
    }
  }
  return biggestNumbers;
}
