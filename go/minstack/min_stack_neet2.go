package minstack

// https://neetcode.io/problems/minimum-stack/question

type MinStackNeet2 struct {
	stack []int
	min   int
}

// super nasty solution with 0(1) extra memory
// push element      -> 3 -> 2 -> 4 -> -1
// stack result      -> 0 ->-1 -> 2 -> -3
// min element       -> 3 -> 2 -> 2 -> -1

// /  if on top of stack element is negative -> this is how newMin is less than oldMin (element is pushed = current min)
//
//	if on top of stack element is positive -> this element + of Stack = element that we pushed
func (s *MinStackNeet2) Push(val int) {
	if len(s.stack) == 0 {
		s.min = val
		s.stack = append(s.stack, 0)
		return
	}
	s.stack = append(s.stack, val-s.min)
	if val < s.min {
		s.min = val
	}
}

func (s *MinStackNeet2) Pop() {
	val := s.stack[len(s.stack)-1]
	if val < 0 {
		s.min = s.min - val
	}
	s.stack = s.stack[:len(s.stack)-1]
}

func (s *MinStackNeet2) Top() int {
	el := s.stack[len(s.stack)-1]
	if el < 0 {
		return s.min
	}
	return s.min + el
}
func (s *MinStackNeet2) GetMin() int {
	return s.min
}
