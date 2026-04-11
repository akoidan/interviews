package balancedbinarytree

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsBalanced(t *testing.T) {
	// [3,9,20,0,0,15,7] — balanced
	assert.True(t, isBalanced(newTree([]int{3, 9, 20, 0, 0, 15, 7})))

	// [1,2,2,3,3,0,0,4,4] — not balanced
	assert.False(t, isBalanced(newTree([]int{1, 2, 2, 3, 3, 0, 0, 4, 4})))

	// empty tree — balanced
	assert.True(t, isBalanced(nil))
}
