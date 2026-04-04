package minstack

// https://neetcode.io/problems/minimum-stack/question

type MinStackNeet struct {
	stack []int
	min   int
}

// super nasty solution with 0(1) extra memory
// push element      -> 3 -> 2 -> 4 -> -1
// last stack element-> 0 ->-1 -> 2 -> -3
// min element       -> 3 -> 2 -> 2 -> -1
// if last stack element is < 0, this means this on this step new min element arrived
// if lastStack > 0 -> topElement = lastStackElement + minElement
func (s *MinStackNeet) Push(val int) {
	if len(s.stack) == 0 {
		s.min = val
		s.stack = append(s.stack, 0)
	} else if val < s.min {
		s.stack = append(s.stack, val-s.min)
		s.min = val
	} else {
		s.stack = append(s.stack, val-s.min)
	}
}

func (s *MinStackNeet) Pop() {
	stackLast := s.stack[len(s.stack)-1]
	if stackLast < 0 {
		s.min = s.min - stackLast
	}
	s.stack = s.stack[:len(s.stack)-1]
}

func (s *MinStackNeet) Top() int {
	if s.stack[len(s.stack)-1] > 0 {
		return s.min + s.stack[len(s.stack)-1]
	}
	return s.min
}
func (s *MinStackNeet) GetMin() int {
	return s.min
}
