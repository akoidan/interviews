package binarytreelevelordertraversal

func levelOrder(root *TreeNode) [][]int {
	res := [][]int{}
	if root == nil {
		return res
	}
	queue := []*TreeNode{root}
	bfsRecursive(queue, &res)
	return res
}

func bfsRecursive(queue []*TreeNode, all *[][]int) {
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
	if len(level) == 0 {
		return
	}
	*all = append(*all, level)
	bfsRecursive(nextQueue, all)
}
