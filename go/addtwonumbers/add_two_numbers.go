package addtwonumbers

// https://neetcode.io/problems/add-two-numbers/question

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	p1 := l1
	p2 := l2

	head := &ListNode{}
	newTemp := head
	for prev := 0; ; {
		v1 := 0
		v2 := 0
		if p1 != nil {
			v1 = p1.Val
			p1 = p1.Next
		}
		if p2 != nil {
			v2 = p2.Val
			p2 = p2.Next
		}
		newTemp.Val = (v1 + v2 + prev) % 10
		prev = (v1 + v2 + prev) / 10
		if p1 == nil && p2 == nil && prev == 0 {
			break
		}
		newTemp.Next = &ListNode{}
		newTemp = newTemp.Next
	}
	return head
}
