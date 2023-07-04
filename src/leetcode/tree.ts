export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export function convertArrayToTree(arr: (number | null)[]) {
  let root = new TreeNode(arr.shift()!, undefined, undefined);
  let prevLevel = [root];
  while (arr.length) {
    let newLevel: TreeNode[] = [];
    for (const pv of prevLevel) {
      let leftValue = arr.shift()!;
      if (leftValue != null) {
        let left = new TreeNode(leftValue);
        pv.left = left;
        newLevel.push(left);
      }
      let rightValue = arr.shift()!;
      if (rightValue != null) {
        let right = new TreeNode(rightValue);
        pv.right = right
        newLevel.push(right);
      }
    }
    prevLevel = newLevel;
  }
  return root;
}
