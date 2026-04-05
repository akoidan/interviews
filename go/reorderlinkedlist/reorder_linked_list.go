package reorderlinkedlist

// https://neetcode.io/problems/reorder-linked-list/question

func reorderList(head *ListNode) {
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
			tmp := l.Next
			l.Next = r
			l = tmp
			il = true
		}
	}
	println(n)
}
