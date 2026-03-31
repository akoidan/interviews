// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/
//
// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is >= target.
// If there is no such subarray, return 0.
//
// Example 1:
//   Input: target = 7, nums = [2,3,1,2,4,3]
//   Output: 2  (subarray [4,3])
//
// Example 2:
//   Input: target = 4, nums = [1,4,4]
//   Output: 1
//
// Example 3:
//   Input: target = 11, nums = [1,1,1,1,1,1,1,1]
//   Output: 0
//
// Constraints:
//   1 <= target <= 10^9
//   1 <= nums.length <= 10^5
//   1 <= nums[i] <= 10^4

package minimumsizesubarraysum

import "math"

func minSubArrayLenMine(target int, nums []int) int {
	l := 0
	sum := 0
	minLength := math.MaxInt
	for r, rv := range nums {
		sum += rv
		if sum < target {
			continue
		}
		for sum-nums[l] >= target {
			sum -= nums[l]
			l++
		}
		minLength = min(minLength, r-l+1)
	}
	if minLength == math.MaxInt {
		return 0
	}
	return minLength
}

func minSubArrayLen(target int, nums []int) int {
	l := 0
	sum := 0
	minLength := math.MaxInt
	for r, rv := range nums {
		sum += rv
		for sum >= target {
			minLength = min(minLength, r-l+1)
			sum -= nums[l]
			l++
		}
	}
	if minLength == math.MaxInt {
		return 0
	}
	return minLength
}
