package main

import (
	"fmt"
	"testing"
)

var java, python bool

const (
	bigA = 1 << 100
	bigB = bigA >> 97
)

func needInt(x int) int { return x*10 + 1 }
func needFloat(x float64) float64 {
	return x * 0.1
}

func add(x, y int) (sum int, difference int) {
	sum = x + y
	difference = x - y
	return
}

func TestFuncArgumentsTypes(t *testing.T) {
	var a, b = add(2, 3)
	fmt.Println(needInt(b))
	fmt.Println(a)
	_ = java
	_ = python
	_ = needFloat(1.0)
}
