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

export function serialize(root: TreeNode | null): string {
  const res = dfs(root);
  let i = 0;
  while (true) {
    // cut ending nulls
    if (res.substring(res.length-i-4, res.length-i) == 'null') {
      i += 5;
    } else {
      break;
    }
  }
  return `[${res.substring(0, res.length - i)}]`;
}

export function dfs(root: TreeNode | null): string {
  if (!root) {
    return "null";
  }
  return `${root.val},${dfs(root.left)},${dfs(root.right)}`;
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (!data.startsWith('[') || !data.endsWith(`]`)) {
    throw Error("Invalid data");
  }
  let [res] =  udfs(data,1);
  return res;
}

export function udfs(data: string, position: number): [TreeNode | null, number] {
  if (position >= data.length || data.length === 1) {
    return [null, data.length]
  }
  const index =  data.indexOf(',', position);
  const currentElement = data.substring(position, index == -1 ? data.length - 1 : index);
  if (currentElement === 'null') {
    return [null, index + 1];
  }
  const currentValue = parseInt(currentElement, 10);
  if (index === -1) {
    return [new TreeNode(currentValue), data.length];
  }
  const [leftNode, leftPosition] = udfs(data, index + 1);
  const [rightNode, rightPosition] = udfs(data, leftPosition);

  return [new TreeNode(currentValue, leftNode, rightNode), rightPosition];
}
