export class TreeNode {
  constructor(
    public val: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {
  }
}

export function convertArrayToTree(arr: (number | null)[]) {
  let root = new TreeNode(arr.shift()!);
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
