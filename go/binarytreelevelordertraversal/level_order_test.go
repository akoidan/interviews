package binarytreelevelordertraversal

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLevelOrderRecursive(t *testing.T) {
	assert.Equal(t, [][]int{{1}, {2, 3}, {4, 5, 6, 7}}, levelOrder(newTree([]int{1, 2, 3, 4, 5, 6, 7})))
}

func TestLevelOrderQueue(t *testing.T) {
	assert.Equal(t, [][]int{{1}, {2, 3}, {4, 5, 6, 7}}, levelOrderQueue(newTree([]int{1, 2, 3, 4, 5, 6, 7})))
}
