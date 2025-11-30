/*
 https://leetcode.com/problems/3sum/description/
 https://neetcode.io/problems/three-integer-sum/question?list=neetcode150


 iven an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

 Notice that the solution set must not contain duplicate triplets.

 Example 1:

 Input: nums = [-1,0,1,2,-1,-4]
 Output: [[-1,-1,2],[-1,0,1]]
 Explanation:
 nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 The distinct triplets are [-1,0,1] and [-1,-1,2].
 Notice that the order of the output and the order of the triplets does not matter.
 Example 2:

 Input: nums = [0,1,1]
 Output: []
 Explanation: The only possible triplet does not sum up to 0.
 Example 3:

 Input: nums = [0,0,0]
 Output: [[0,0,0]]
 Explanation: The only possible triplet sums up to 0.

 * */


function setOrIncrease(m: Map<number, number>, v: number) {
  let value = m.get(v);
  let valueMissing = value === undefined;
  if (valueMissing) {
    m.set(v, 1);
  } else {
    m.set(v, value! + 1);
  }
  return valueMissing;
}

function decreaseOrDelete(map: Map<number, number>, v: number) {
  let numberOfAOccurrences: number = map.get(v)!;
  if (numberOfAOccurrences == 1) {
    map.delete(v)
  } else {
    map.set(v, numberOfAOccurrences - 1)
  }
}

function getValueCount(map: Map<number, number>, c: number) {
  return map.get(c);
}

function getC(a: number, b: number) {
  let c = -(a + b);
  if (c == -0) {
    c = 0;
  }
  return c;
}

export function threeSum(nums: number[]): number[][] {
  let results: number[][] = [];
  let map: Map<number, number> = new Map();
  nums.forEach(n => {
    setOrIncrease(map, n)
  })

  // [-1,0,1,2,-1,-4]
  // -4 -1 -1 0 1 2 
  console.log(performance.now())
  nums.sort();
  console.log(performance.now())
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    decreaseOrDelete(map, a)
    for (let j = i + 1; j < nums.length; j++) {
      let b = nums[j];
      let c = getC(a, b);
      let valueCount =  getValueCount(map, c)
      if (valueCount != undefined && ((a === c || b === c) && valueCount > 1)) {
        let newEll = [a, c, nums[j]];
        // let strHash = newEll.toString()
        // if (!hashResults.has(strHash)) {
          results.push(newEll)
          // hashResults.add(strHash)
        // }
      }
    }
  }
  return results;
}


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
