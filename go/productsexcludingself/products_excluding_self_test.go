package productsexcludingself

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestProductExceptSelf1(t *testing.T) {
	actual := productExceptSelf([]int{1, 2, 4, 6})
	expected := []int{48, 24, 12, 8}
	assert.Equal(t, expected, actual)
}

func TestProductExceptSelf2(t *testing.T) {
	actual := productExceptSelf([]int{-1, 0, 1, 2, 3})
	expected := []int{0, -6, 0, 0, 0}
	assert.Equal(t, expected, actual)
}
