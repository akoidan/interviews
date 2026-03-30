package mincostclimbingstairs

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestAdd(t *testing.T) {
	assert.Equal(t, 4, minCostClimbingStairs([]int{1, 2, 1, 2, 1, 1, 1}))
}
