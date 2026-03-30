package maxareaofislands

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMaxIslandDFS(t *testing.T) {
	assert.Equal(t, 6, maxAreaOfIsland([][]int{
		{0, 1, 1, 0, 1},
		{1, 0, 1, 0, 1},
		{0, 1, 1, 0, 1},
		{0, 1, 0, 0, 1},
	}))
}

func TestMaxIslandQueue(t *testing.T) {
	assert.Equal(t, 6, maxAreaOfIslandQueue([][]int{
		{0, 1, 1, 0, 1},
		{1, 0, 1, 0, 1},
		{0, 1, 1, 0, 1},
		{0, 1, 0, 0, 1},
	}))
}
