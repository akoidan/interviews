package removenodefromendoflinkedlist

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRemoveNthFromEnd1(t *testing.T) {
	head := newList([]int{1, 2, 3, 4})
	assert.Equal(t, []int{1, 2, 4}, toSlice(removeNthFromEnd(head, 2)))
}

func TestRemoveNthFromEnd2(t *testing.T) {
	head := newList([]int{1, 2})
	assert.Equal(t, []int{1}, toSlice(removeNthFromEnd(head, 1)))
}

func TestRemoveNthFromEnd6(t *testing.T) {
	head := newList([]int{1, 2})
	assert.Equal(t, []int{2}, toSlice(removeNthFromEnd(head, 2)))
}
func TestRemoveNthFromEnd3(t *testing.T) {
	head := newList([]int{5})
	assert.Equal(t, []int{}, toSlice(removeNthFromEnd(head, 1)))
}

func TestRemoveNthFromEnd4(t *testing.T) {
	head := newList([]int{5})
	assert.Equal(t, []int{5}, toSlice(removeNthFromEnd(head, 2)))
}
