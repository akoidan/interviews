package longestrepeatingcharacterreplacement

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestAAABABBA_k1(t *testing.T) {
	assert.Equal(t, 4, characterReplacement("AABABBA", 1))
}

func TestABAB_k2(t *testing.T) {
	assert.Equal(t, 4, characterReplacement("ABAB", 2))
}

func TestAAAA_k0(t *testing.T) {
	assert.Equal(t, 4, characterReplacement("AAAA", 0))
}

func TestAAAA_k2(t *testing.T) {
	assert.Equal(t, 4, characterReplacement("AAAA", 2))
}

func TestABCD_k0(t *testing.T) {
	assert.Equal(t, 1, characterReplacement("ABCD", 0))
}

func TestABCD_k3(t *testing.T) {
	assert.Equal(t, 4, characterReplacement("ABCD", 3))
}

func TestSingleChar(t *testing.T) {
	assert.Equal(t, 1, characterReplacement("A", 0))
}

func TestAABABBA_k2(t *testing.T) {
	assert.Equal(t, 5, characterReplacement("AABABBA", 2))
}
