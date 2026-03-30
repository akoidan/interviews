package binarytreelevelordertraversal

func levelOrderQueue(root *TreeNode) [][]int {
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
