package maximumsubarray

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMaxSubArray1(t *testing.T) {
	assert.Equal(t, maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}), 6)
}

func TestMaxSubArray2(t *testing.T) {
	assert.Equal(t, maxSubArray([]int{1, 2}), 3)
}
