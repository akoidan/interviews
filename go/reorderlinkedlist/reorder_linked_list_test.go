package reorderlinkedlist

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestReorderList1(t *testing.T) {
	head := newList([]int{2, 4, 6, 8})
	reorderList(head)
	assert.Equal(t, []int{2, 8, 4, 6}, toSlice(head))
}

func TestReorderList2(t *testing.T) {
	head := newList([]int{2, 4, 6, 8, 10})
	reorderList(head)
	assert.Equal(t, []int{2, 10, 4, 8, 6}, toSlice(head))
}

func TestReorderList3(t *testing.T) {
	head := newList([]int{0, 1, 2, 3, 4, 5, 6})
	reorderList(head)
	assert.Equal(t, []int{0, 6, 1, 5, 2, 4, 3}, toSlice(head))
}
