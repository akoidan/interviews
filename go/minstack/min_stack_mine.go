package minstack

// https://neetcode.io/problems/minimum-stack/question

type MinStack struct {
	lastNode *Node
}

func Constructor() MinStack {
	return MinStack{}
}

type Node struct {
	prev  *Node
	value int
	min   int
}

func NewMinStack() MinStack {
	return MinStack{}
}

func (s *MinStack) Push(val int) {
	minEl := val
	if s.lastNode != nil {
		minEl = min(s.lastNode.min, val)
	}
	s.lastNode = &Node{
		prev:  s.lastNode,
		min:   minEl,
		value: val,
	}
}

func (s *MinStack) Pop() {
	if s.lastNode != nil {
		s.lastNode = s.lastNode.prev
	}
}

func (s *MinStack) Top() int {
	return s.lastNode.value
}
func (s *MinStack) GetMin() int {
	return s.lastNode.min
}
