package removenodefromendoflinkedlist

// https://neetcode.io/problems/remove-node-from-end-of-linked-list/question?list=neetcode150

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	if n <= 0 {
		return head
	}
	count := 0
	var prev *ListNode = head
	for cur := head; cur != nil; cur = cur.Next {
		if count < n+1 {
			count++
		} else {
			prev = prev.Next
		}
	}
	if count == n {
		return head.Next
	} else if count < n {
		return head // or error panic = invalid case
	}
	prev.Next = prev.Next.Next
	return head
}
