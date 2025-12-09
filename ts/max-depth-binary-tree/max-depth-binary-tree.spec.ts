

import { Solution , TreeNode} from './max-depth-binary-tree';

/**
 * Converts an array representation of a binary tree to TreeNode structure
 * @param arr Array representation where null represents missing nodes
 * @returns Root TreeNode or null if array is empty
 *
 * Example: [1,2,3,null,null,4] creates:
 *     1
 *   /   \
 *  2     3
 *       /
 *      4
 */
function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (!arr || arr.length === 0 || arr[0] === null) {
    return null;
  }

  const root: TreeNode = { val: arr[0], left: null, right: null };
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!;

    // Process left child
    if (i < arr.length && arr[i] !== null) {
      node.left = { val: arr[i]!, left: null, right: null };
      queue.push(node.left);
    }
    i++;

    // Process right child
    if (i < arr.length && arr[i] !== null) {
      node.right = { val: arr[i]!, left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

describe('Solution - maxDepth', () => {
  let solution: Solution;

  beforeEach(() => {
    solution = new Solution();
  });

  test('should return 0 for null root', () => {
    expect(solution.maxDepth(null)).toBe(0);
  });

  test('should return 1 for single node tree', () => {
    const root = arrayToTree([1]);
    expect(solution.maxDepth(root)).toBe(1);
  });

  test('should return correct depth for balanced tree', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    expect(solution.maxDepth(root)).toBe(3);
  });

  test('should return correct depth for left-skewed tree', () => {
    const root = arrayToTree([1, 2, null, 3, null, null, null, 4]);
    expect(solution.maxDepth(root)).toBe(4);
  });

  test('should return correct depth for right-skewed tree', () => {
    const root = arrayToTree([1, null, 2, null, null, null, 3]);
    expect(solution.maxDepth(root)).toBe(3);
  });

  test('should handle example from problem description', () => {
    const root = arrayToTree([1, 2, 3, null, null, 4]);
    expect(solution.maxDepth(root)).toBe(3);
  });

  test('should handle larger tree', () => {
    const root = arrayToTree([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(solution.maxDepth(root)).toBe(4);
  });

  test('should handle empty array', () => {
    const root = arrayToTree([]);
    expect(solution.maxDepth(root)).toBe(0);
  });
});

describe('arrayToTree utility function', () => {
  test('should convert simple array to tree', () => {
    const root = arrayToTree([1, 2, 3]);
    expect(root?.val).toBe(1);
    expect(root?.left?.val).toBe(2);
    expect(root?.right?.val).toBe(3);
  });

  test('should handle null values correctly', () => {
    const root = arrayToTree([1, null, 2, null, null, null, 3]);
    expect(root?.val).toBe(1);
    expect(root?.left).toBeNull();
    expect(root?.right?.val).toBe(2);
    expect(root?.right?.right?.val).toBe(3);
  });

  test('should return null for empty or null array', () => {
    expect(arrayToTree([])).toBeNull();
    expect(arrayToTree([null])).toBeNull();
  });
});