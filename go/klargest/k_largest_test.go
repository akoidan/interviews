package minimumsizesubarraysum

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestExample1(t *testing.T) {
	assert.Equal(t, 2, findKthLargest([]int{2, 3, 1, 2, 4, 3}, 3))
}
