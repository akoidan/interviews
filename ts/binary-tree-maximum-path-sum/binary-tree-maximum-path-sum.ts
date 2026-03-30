export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}



export function maxPathSum(root: TreeNode | null): number {
  return maxPathSumBig(root).absolute;
}

export function maxPathSumBig(root: TreeNode | null): {
  absolute: number;
  connected: number;
} {
  if (!root) {
    return {
      absolute: 0,
      connected: 0,
    }
  }
  let leftConnected = -Infinity;
  let rightConnected = -Infinity;
  let leftAbsolute = -Infinity;
  let rightAbsolute = -Infinity;
  if (root.left) {
    let res = maxPathSumBig(root.left);
    leftConnected = res.connected;
    leftAbsolute = res.absolute
  }
  if (root.right) {
    let res = maxPathSumBig(root.right)
    rightAbsolute = res.absolute
    rightConnected = res.connected;
  }
  let connected = root.val;
  if (leftConnected > rightConnected && leftConnected > 0) {
    connected += leftConnected
  } else if (rightConnected > 0) {
    connected += rightConnected;
  }
  let absolute = Math.max(connected, rightAbsolute, leftAbsolute);
  if (leftConnected >= 0 && rightConnected >= 0) { // both node can created a loop that is not connected to the parent tree.
    absolute = Math.max(absolute, leftConnected + rightConnected + root.val);
  }
  return {
    connected,
    absolute,
  };
}