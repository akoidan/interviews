package minimumsizesubarraysum

// Nebius interview task 2026-04-01 14-56-58.mkv
import "testing"

type UniqueElements interface {
	getUnique() int
	add(a int)
	delete(a int)
}

type Unique struct {
	singleElements map[int]struct{}
	allElement     map[int]int
}

func (u *Unique) getUnique() int {
	for k := range u.singleElements {
		return k
	}
	return 0
}

var _ UniqueElements = (*Unique)(nil)

func (u *Unique) add(e int) {
	if v, ok := u.allElement[e]; ok {
		if v == 1 {
			delete(u.singleElements, e)
		}
		u.allElement[e]++
	} else {
		u.allElement[e] = 1
		u.singleElements[e] = struct{}{}
	}
}

func (u *Unique) delete(e int) {
	if v, ok := u.allElement[e]; ok {
		if v == 1 {
			delete(u.singleElements, e)
			delete(u.allElement, e)
		} else {
			u.allElement[e]--
			if u.allElement[e] == 1 {
				u.singleElements[e] = struct{}{}
			}
		}
	}
}

func assert(a int, b int, cause string) {
	if a != b {
		panic(cause)
	}
}
func TestAasd(t *testing.T) {
	unique := Unique{
		singleElements: make(map[int]struct{}),
		allElement:     make(map[int]int),
	}
	unique.delete(3)
	assert(unique.getUnique(), 0, "[] -> 0")
	unique.add(3)
	assert(unique.getUnique(), 3, "[3] -> 3")
	unique.add(3)
	assert(unique.getUnique(), 0, "[3,3] -> 0")
	unique.delete(3)
	assert(unique.getUnique(), 3, "[3] -> 3")
	unique.add(3)
	assert(unique.getUnique(), 0, "[3,3] -> 0")
	unique.add(4)
	assert(unique.getUnique(), 4, "[3,3,4] -> 4")
}
