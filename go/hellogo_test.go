package main

import (
	"fmt"
	"strconv"
	"testing"
)

var pl = fmt.Println

func TestIfStatement(t *testing.T) {
	iAge := 8
	if (iAge >= 1) && (iAge <= 19) {
		pl("Important Birthday")
	} else if iAge == 21 || iAge == 50 {
	}
}

func TestTypeConversions(t *testing.T) {
	var cv1 = 1.5
	cv2 := int(cv1)
	pl(cv2)
	cv4, err := strconv.Atoi("50000")
	pl(cv4, err)
	if cv8, err := strconv.ParseFloat("2312.12", 64); err == nil {
		pl(cv8)
	}
}
