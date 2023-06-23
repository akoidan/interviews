/*
 https://leetcode.com/problems/two-sum/
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 You can return the answer in any order.
 * */
// export function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length - 1; i ++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
//   throw Error("No such elements");
// }


export function twoSum(nums: number[], target: number): number[] {
  let m = new Map();
  try {
   nums.forEach((v, i) => {
    let lookFor = target - v;
    if (m.has(lookFor)) {
      throw [m.get(lookFor), i];
    }
    m.set(v, i)
  })
  } catch (e) {
    return e
  }
  throw Error("No such elements");
}
//
// export function twoSum(nums: number[], target: number): number[] {
//   let m = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let lookFor = target - nums[i];
//     if (m.has(lookFor)) {
//       return [m.get(lookFor), i];
//     }
//     m.set(nums[i], i);
//   }
//   return [];
// }


// export function twoSum(nums: number[], target: number): number[] {
//   let m: Record<number, number> = {}
//   for (let i = 0; i < nums.length; i++) {
//     let lookFor = target - nums[i];
//     if (m[lookFor] != undefined) {
//       return [m[lookFor], i];
//     }
//     m[nums[i]] = i;
//   }
//   return [];
// }
