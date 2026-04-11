package balancedbinarytree

func isBalanced(root *TreeNode) bool {
	_, b := isBalancedHeight(root)
	return b
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}

func isBalancedHeight(root *TreeNode) (int, bool) {
	if root == nil {
		return 0, true
	}

	lh, bl := isBalancedHeight(root.Left)
	if !bl {
		return 0, false
	}

	rh, br := isBalancedHeight(root.Right)
	if !br {
		return 0, false
	}
	if abs(lh-rh) > 1 {
		return 0, false
	}
	return max(lh, rh) + 1, true
}
