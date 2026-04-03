package productsexcludingself

// https://neetcode.io/problems/products-of-array-discluding-self/question

func productExceptSelf(nums []int) []int {
	res := make([]int, len(nums))
	res[len(nums)-1] = 1
	// suffix (right to the element multiplier for each element
	// also use result the same way as prefix array
	for i := len(nums) - 2; i >= 0; i-- {
		res[i] = res[i+1] * nums[i+1]
	}
	// prev: = prefix, but since we can iterate within the same cycle as generate prefix
	// we just remember the last element, that's it
	prev := 1
	for i := 0; i < len(nums); i++ {
		res[i] = prev * res[i]
		prev = nums[i] * prev
	}

	return res
}

func productExceptSelfMine(nums []int) []int {
	prefix := make([]int, len(nums))
	suffix := make([]int, len(nums))
	prefix[0] = 1
	suffix[len(suffix)-1] = 1
	res := make([]int, len(nums))
	for i := 1; i < len(nums); i++ {
		prefix[i] = prefix[i-1] * nums[i-1]
	}

	for i := len(nums) - 2; i >= 0; i-- {
		suffix[i] = suffix[i+1] * nums[i+1]
	}

	for i := 0; i < len(nums); i++ {
		res[i] = prefix[i] * suffix[i]
	}

	return res
}
