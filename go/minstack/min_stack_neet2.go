package minstack

// https://neetcode.io/problems/minimum-stack/question

type MinStackNeet2 struct {
	stack []int
	min   int
}

// super nasty solution with 0(1) extra memory
// push element      -> 3 -> 2 -> 4 -> -1
//
//	0 ->-1 -> 2 -> -1
//
// if last stack element is < 0, this means this on this step new min element arrived
// if lastStack > 0 -> topElement = lastStackElement + minElement
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
