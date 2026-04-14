func kthSmallest(root *TreeNode, k int) int {
    _, res := dfs(root, k, 0)
	if res == nil {
		panic("K is more than number of elements")
	}
	return *res
}

func dfs(root *TreeNode, k int, n int) (int, *int) {
	if root == nil {
		return n, nil
	}
	nn, res := dfs(root.Left, k, n)
	if res != nil {
		return k, res
	}
	if nn + 1 == k {
		return k, &root.Val
	}
	return dfs(root.Right, k, nn +1)
}
