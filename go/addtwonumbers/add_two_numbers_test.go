package addtwonumbers

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestAddTwoNumbers1(t *testing.T) {
	l1 := newList([]int{2, 4, 3})
	l2 := newList([]int{5, 6, 4})
	// 342 + 465 = 807
	assert.Equal(t, []int{7, 0, 8}, toSlice(addTwoNumbers(l1, l2)))
}

func TestAddTwoNumbers2(t *testing.T) {
	l1 := newList([]int{0})
	l2 := newList([]int{0})
	assert.Equal(t, []int{0}, toSlice(addTwoNumbers(l1, l2)))
}

func TestAddTwoNumbers3(t *testing.T) {
	l1 := newList([]int{9, 9, 9, 9, 9, 9, 9})
	l2 := newList([]int{9, 9, 9, 9})
	// 9999999 + 9999 = 10009998
	assert.Equal(t, []int{8, 9, 9, 9, 0, 0, 0, 1}, toSlice(addTwoNumbers(l1, l2)))
}
