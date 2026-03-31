package minimumsizesubarraysum

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestExample1(t *testing.T) {
	assert.Equal(t, 2, minSubArrayLen(7, []int{2, 3, 1, 2, 4, 3}))
}

func TestExample2(t *testing.T) {
	assert.Equal(t, 1, minSubArrayLen(4, []int{1, 4, 4}))
}

func TestNoSolution(t *testing.T) {
	assert.Equal(t, 0, minSubArrayLen(11, []int{1, 1, 1, 1, 1, 1, 1, 1}))
}

func TestSingleElement(t *testing.T) {
	assert.Equal(t, 1, minSubArrayLen(4, []int{4}))
}

func TestEntireArray(t *testing.T) {
	assert.Equal(t, 3, minSubArrayLen(9, []int{1, 2, 3, 4}))
}
