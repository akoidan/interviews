package maximumsubarray

import "math"

func maxSubArray(arr []int) int {
	res := math.MinInt
	maxRes := math.MinInt
	for _, v := range arr {
		if v > res && res < 0 {
			res = 0
		}
		res += v
		maxRes = max(maxRes, res)
	}
	return maxRes
}
