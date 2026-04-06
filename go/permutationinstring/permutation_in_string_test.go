package permutationinstring

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestAB_inEIDBaooo(t *testing.T) {
	assert.Equal(t, true, checkInclusion("ab", "eidbaooo"))
}

func TestAB_inEIDBoaoo(t *testing.T) {
	assert.Equal(t, false, checkInclusion("ab", "eidboaoo"))
}

func TestADC_inDCDA(t *testing.T) {
	assert.Equal(t, true, checkInclusion("adc", "dcda"))
}
