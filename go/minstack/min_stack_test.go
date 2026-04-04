package minstack

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMinStack1(t *testing.T) {
	s := NewMinStack()
	s.Push(1)
	s.Push(2)
	s.Push(0)
	assert.Equal(t, 0, s.GetMin())
	s.Pop()
	assert.Equal(t, 1, s.GetMin())
	assert.Equal(t, 2, s.Top())
}
