export function findDuplicate(nums: number[]): number {
  let fastPointer: number = nums[0];
  let slowPointer: number = nums[0];
  do {
    fastPointer = nums[nums[fastPointer]];
    slowPointer = nums[slowPointer];
  } while (fastPointer != slowPointer)
  let slow2 = nums[0];
  while (slow2 != slowPointer) {
    slow2 = nums[slow2];
    slowPointer = nums[slowPointer];
  }
  return slowPointer;
}
