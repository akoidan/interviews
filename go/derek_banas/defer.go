package main

import "fmt"

func main() {
	defer doLast()
}

func doLast() {
	fmt.Println("Last")
}
