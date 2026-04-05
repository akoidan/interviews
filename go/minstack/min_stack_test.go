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

func TestMinStackNeetcase2(t *testing.T) {
	s := MinStackNeet{}
	s.Push(-2)
	s.Push(0)
	s.Push(-3)
	assert.Equal(t, -3, s.GetMin())
	s.Pop()
	assert.Equal(t, 0, s.Top())
	assert.Equal(t, -2, s.GetMin())
}

func TestMinStackNeet(t *testing.T) {
	s := MinStackNeet{}
	s.Push(3)
	assert.Equal(t, 3, s.GetMin())
	s.Push(2)
	assert.Equal(t, 2, s.GetMin())
	s.Push(4)
	assert.Equal(t, 2, s.GetMin())
	s.Push(-1)
	assert.Equal(t, -1, s.GetMin())
	s.Pop()
	assert.Equal(t, 2, s.GetMin())
	assert.Equal(t, 4, s.Top())
}

func TestMinStackNeet2case2(t *testing.T) {
	s := MinStackNeet2{}
	s.Push(10)
	s.Pop()
	s.Push(20)
	assert.Equal(t, 20, s.Top())
	s.Push(-20)
	assert.Equal(t, -20, s.GetMin())
}

func TestMinStackNeet2(t *testing.T) {
	s := MinStackNeet2{}
	s.Push(3)
	assert.Equal(t, 3, s.GetMin())
	s.Push(2)
	assert.Equal(t, 2, s.GetMin())
	s.Push(4)
	assert.Equal(t, 2, s.GetMin())
	s.Push(-1)
	assert.Equal(t, -1, s.GetMin())
	s.Pop()
	assert.Equal(t, 2, s.GetMin())
	assert.Equal(t, 4, s.Top())
}
