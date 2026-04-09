package copylinkedlistwithrandompointer

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

// Helper to build a list from vals and random indices (-1 means nil)
func buildList(vals []int, randomIdxs []int) *Node {
	if len(vals) == 0 {
		return nil
	}
	nodes := make([]*Node, len(vals))
	for i, v := range vals {
		nodes[i] = &Node{Val: v}
	}
	for i := range nodes {
		if i+1 < len(nodes) {
			nodes[i].Next = nodes[i+1]
		}
		if randomIdxs[i] != -1 {
			nodes[i].Random = nodes[randomIdxs[i]]
		}
	}
	return nodes[0]
}

// Helper to extract [val, randomIndex] pairs from a list
func toValRandom(head *Node) [][2]int {
	nodes := []*Node{}
	for n := head; n != nil; n = n.Next {
		nodes = append(nodes, n)
	}
	idx := map[*Node]int{}
	for i, n := range nodes {
		idx[n] = i
	}
	result := make([][2]int, len(nodes))
	for i, n := range nodes {
		ri := -1
		if n.Random != nil {
			ri = idx[n.Random]
		}
		result[i] = [2]int{n.Val, ri}
	}
	return result
}

func TestCopyRandomList1(t *testing.T) {
	// [[7,null],[13,0],[11,4],[10,2],[1,0]]
	head := buildList([]int{7, 13, 11, 10, 1}, []int{-1, 0, 4, 2, 0})
	got := copyRandomList(head)
	assert.NotSame(t, head, got)
	assert.Equal(t, toValRandom(head), toValRandom(got))
}

func TestCopyRandomList2(t *testing.T) {
	// [[1,1],[2,1]]
	head := buildList([]int{1, 2}, []int{1, 1})
	got := copyRandomList(head)
	assert.NotSame(t, head, got)
	assert.Equal(t, toValRandom(head), toValRandom(got))
}

func TestCopyRandomList3(t *testing.T) {
	// [[3,null],[3,0],[3,null]]
	head := buildList([]int{3, 3, 3}, []int{-1, 0, -1})
	got := copyRandomList(head)
	assert.NotSame(t, head, got)
	assert.Equal(t, toValRandom(head), toValRandom(got))
}

func TestCopyRandomListNil(t *testing.T) {
	assert.Nil(t, copyRandomList(nil))
}
