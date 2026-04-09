package copylinkedlistwithrandompointer

// https://neetcode.io/problems/copy-linked-list-with-random-pointer/question

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}
	tmp := head
	newHead := &Node{
		Val: head.Val,
	}
	newTmp := newHead
	pointers := make(map[*Node]*Node)
	pointers[head] = newHead
	for tmp.Next != nil {
		newTmp.Next = &Node{
			Val: tmp.Next.Val,
		}
		newTmp = newTmp.Next
		tmp = tmp.Next
		pointers[tmp] = newTmp
	}
	newTmp = newHead
	tmp = head
	for newTmp != nil {
		newTmp.Random = pointers[tmp.Random]
		tmp = tmp.Next
		newTmp = newTmp.Next
	}
	return newHead
}
