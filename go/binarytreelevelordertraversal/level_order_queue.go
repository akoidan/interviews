package binarytreelevelordertraversal

func levelOrderQueueV1(root *TreeNode) [][]int {
	res := [][]int{}
	if root == nil {
		return res
	}
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		nextQueue := []*TreeNode{}
		level := []int{}
		for len(queue) > 0 {
			item := queue[0]
			queue = queue[1:]
			if item == nil {
				continue
			}
			level = append(level, item.Val)
			nextQueue = append(nextQueue, item.Left)
			nextQueue = append(nextQueue, item.Right)
		}
		queue = nextQueue
		if len(level) > 0 {
			res = append(res, level)
		}
	}
	return res
}

func levelOrderQueue(root *TreeNode) [][]int {
	result := make([][]int, 0)
	queue := make([]*TreeNode, 0)
	queue = append(queue, root)
	for len(queue) > 0 {
		prevQueueLength := len(queue)
		currentLevel := make([]int, 0)
		for i := 0; i < prevQueueLength; i++ {
			currentLevel = append(currentLevel, queue[i].Val)
			if queue[i].Left != nil {
				queue = append(queue, queue[i].Left)
			}
			if queue[i].Right != nil {
				queue = append(queue, queue[i].Right)
			}
		}
		result = append(result, currentLevel)
		queue = queue[prevQueueLength:]
	}
	return result
}
