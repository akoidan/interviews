/**
 * 643. Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i/
 *
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum
 * average value and return this value.
 *
 * Example 1:
 *   Input: nums = [1,12,-5,-6,50,3], k = 4
 *   Output: 12.75
 *   Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 12.75
 *
 * Example 2:
 *   Input: nums = [5], k = 1
 *   Output: 5.0
 *
 * Constraints:
 *   n == nums.length
 *   1 <= k <= n <= 10^5
 *   -10^4 <= nums[i] <= 10^4
 */

export function findMaxAverage(nums: number[], k: number): number {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i]
  }
  let windowSum = maxSum;
  for (let i = 1; i < nums.length - k + 1; i++) {
    windowSum += nums[i + k - 1] - nums[i - 1];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
}
