package reorderlinkedlist

// https://neetcode.io/problems/reorder-linked-list/question

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func reorderList(head *ListNode) {
	slow := head
	fast := head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	prev := slow
	var cur *ListNode = nil
	if slow != nil {
		cur = slow.Next
	}
	for cur != nil {
		tmp := cur.Next
		cur.Next = prev
		prev = cur
		cur = tmp
	}
	r := prev
	l := head
	for l != r {
		tmp := l.Next
		l.Next = r
		l = r
		r = tmp
	}
	r.Next = nil

}

func reorderListv2(head *ListNode) {
	length := 0
	for cr := head; cr.Next != nil; cr = cr.Next {
		length++
	}
	middle := length / 2
	cr := head
	for i := 0; i < middle; cr = cr.Next {
		i++
	}
	n := cr.Next
	c := cr
	for n != nil {
		tmp := n.Next
		n.Next = c
		c = n
		n = tmp
	}
	l := head
	r := c
	il := true
	for l != r {
		if il {
			tmp := l.Next
			l.Next = r
			l = tmp
			il = false
		} else {
			tmp := r.Next
			r.Next = l
			r = tmp
			il = true
		}
	}
	r.Next = nil
	println(n)
}
