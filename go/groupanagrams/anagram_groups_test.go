package groupanagrams

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGroupAnagram1(t *testing.T) {
	actual := groupAnagrams([]string{"act", "pots", "tops", "cat", "stop", "hat"})
	expected := [][]string{{"hat"}, {"act", "cat"}, {"pots", "tops", "stop"}}
	assert.ElementsMatch(t, actual, expected)
}
