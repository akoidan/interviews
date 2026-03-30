package mincostclimbingstairs

func minCostClimbingStairs(cost []int) int {
	memo := make(map[int]int)
	return min(minSteps(cost, 0, memo), minSteps(cost, 1, memo))
}

func minSteps(cost []int, i int, memo map[int]int) int {
	if i >= len(cost) {
		return 0
	}
	if va, ok := memo[i]; ok {
		return va
	}
	val := cost[i] + min(minSteps(cost, i+1, memo), minSteps(cost, i+2, memo))
	memo[i] = val
	return val
}
