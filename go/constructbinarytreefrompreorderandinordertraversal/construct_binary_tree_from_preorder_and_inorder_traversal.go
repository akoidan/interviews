// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
type DataHolder struct {
	indexes map[int]int
	preorder []int
	inorder []int
}


func (self *DataHolder) buildTreeDebug(
	preorderl int,
	preorderr int,
	inorderl int,
	inorderr int,
	side string,
) *TreeNode {
	if preorderl >= preorderr {
		return nil
	}
	val := self.preorder[preorderl]
	i, ok := self.indexes[val]
	if !ok {
		panic("not found")
	}
	fmt.Printf("%s [%d]= %d\n", side, i, val)
	fmt.Printf("preorder [%d:%d]=%v\n", preorderl, preorderr, self.preorder[preorderl:preorderr])
	fmt.Printf("inorder [%d:%d]=%v\n\n", inorderl, inorderr, self.inorder[inorderl:inorderr])
	return &TreeNode{
		Val: val,
		Left: self.buildTreeDebug(preorderl+1, preorderl+1+i-inorderl, inorderl, i, fmt.Sprintf("%s->left", side)),
		Right: self.buildTreeDebug(preorderl+1+i-inorderl, preorderr, i+1, inorderr, fmt.Sprintf("%s->right", side)),
	}
}


func buildTree(preorder []int, inorder []int) *TreeNode {
	blah := DataHolder {
		indexes: make(map[int]int),
		preorder: preorder,
		inorder: inorder,
	}
	for i, v := range inorder {
		blah.indexes[v] = i
	}
	return blah.buildTreeDebug(0, len(inorder), 0, len(preorder), "")
}
