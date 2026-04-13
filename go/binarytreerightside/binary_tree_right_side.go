// https://neetcode.io/problems/binary-tree-right-side-view/solution

func rightSideView(root *TreeNode) []int {
    res := make([]int, 0)
    if root == nil {
        return res
    }
    queue := []*TreeNode{root}
    for len(queue) > 0 {
        l := len(queue)
        res = append(res, queue[len(queue)-1].Val)
        for i := 0; i < l; i ++ {
            if queue[i].Left != nil {
                queue = append(queue, queue[i].Left)
            }
            if queue[i].Right != nil {
                queue = append(queue, queue[i].Right)
            }
        }
        queue = queue[l:]
    }
    return res
}
