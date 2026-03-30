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


export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  let currentLevel: TreeNode[] = []
  if (root) {
    currentLevel.push(root)
  }
  while (currentLevel.length > 0) {
    result.push(currentLevel.map(a => a.val))
    let backCl = currentLevel;
    currentLevel = []
    for (let a of backCl) {
      if (a.left) {
        currentLevel.push(a.left)
      }
      if (a.right) {
        currentLevel.push(a.right)
      }
    }
  }
  return result;
}


// function levelReqursive(currentLevel: (TreeNode|null)[], result: number[][]): void {
//   let nextLevel: (TreeNode|null)[] = []
//   let appendRes: number[] = []
//   let resExist = false
//   for (const a of currentLevel) {
//     if (!a) {
//       continue
//     }
//     resExist = true;
//     nextLevel.push(a.left, a.right)
//
//     appendRes.push(a.val)
//   }
//   if (resExist) {
//     result.push(appendRes)
//   }
//   if (nextLevel.length !== 0) {
//     levelReqursive(nextLevel, result);
//   }
// }
//
// export function levelOrder(root: TreeNode | null): number[][] {
//   let res: number[][] = [];
//   levelReqursive([root], res);
//   return res;
// }