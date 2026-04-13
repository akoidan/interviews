// https://neetcode.io/problems/valid-binary-search-tree/history?submissionIndex=8

func isValidBST(root *TreeNode) bool {
	return isValidBSTRange(root, math.MinInt32, math.MaxInt32)
}

//                         120
//                   70            140
//                 50 100        130 160  
//              20,55,75,110  119,135 150,200
func isValidBSTRange(root *TreeNode, low int, high int) bool {
	if root == nil {
		return true
	}
	if root.Val <= low || root.Val >= high {
		return false
	}
	if root.Left != nil {
		if !isValidBSTRange(root.Left, low, root.Val) {
			return false
		}
	}
	if root.Right != nil {
		if !isValidBSTRange(root.Right, root.Val, high) {
			return false
		}
	}
    return true
}
