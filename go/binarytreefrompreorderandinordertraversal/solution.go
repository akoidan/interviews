package binarytreefrompreorderandinordertraversal

import "fmt"

func buildTree(preorder []int, inorder []int) *TreeNode {
	return buildTreeDebug(preorder, inorder, 0, "")
}
func buildTreeDebug(preorder []int, inorder []int, level int, side string) *TreeNode {

	if len(preorder) == 0 {

		return nil
	}
	i := -1
	v := 0
	found := false
	for i, v = range inorder {
		if v == preorder[0] {
			found = true
			break
		}
	}
	if !found {

		return nil
	}

	leftInOrder := inorder[0:i]
	rightInOrder := inorder[i+1:]
	leftPreorder := preorder[1 : len(leftInOrder)+1]
	righPreorder := preorder[len(leftInOrder)+1:]
	strL := fmt.Sprintf("%s-%d_left", side, level)
	strR := fmt.Sprintf("%s-%d_right", side, level)
	return &TreeNode{
		Val:   preorder[0],
		Left:  buildTreeDebug(leftPreorder, leftInOrder, level+1, strL),
		Right: buildTreeDebug(righPreorder, rightInOrder, level+1, strR),
	}
}
