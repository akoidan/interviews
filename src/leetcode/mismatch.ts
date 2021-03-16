export function findErrorNums(nums: number[]): number[] {

  let missingNumber: number;
  let repeatetNumber: number;
  for (let i = 1; i < nums.length +1; i++) {
    if (!nums.includes(i)) {
      missingNumber = i;
    }
    if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) {
      repeatetNumber = nums[i];
    }
  }
  return  [repeatetNumber!, missingNumber!]
};
