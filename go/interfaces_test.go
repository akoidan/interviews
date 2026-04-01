package main

import (
	"fmt"
	"testing"
)

type Animal interface {
	Speak() string
}

type Dog struct {
	Name string
}

type Cat struct {
	Name string
}

func (d Dog) Speak() string {
	return "woof"
}

func (c Cat) Speak() string {
	return "meow"
}

func makeNoise(a Animal) {
	fmt.Println(a.Speak())
}

func TestExample1(t *testing.T) {
	dog := Dog{Name: "Rex"}
	cat := Cat{Name: "Whiskers"}

	makeNoise(dog)
	makeNoise(cat)

	// slice of interface — holds different concrete types
	animals := []Animal{&dog, &cat} // Use pointers!

	// Modify original dog
	dog.Name = "Buddy"

	// Now the slice reflects the change!
	fmt.Printf("Original dog name: %s\n", dog.Name)
	fmt.Printf("Dog in slice: %s\n", animals[0].(*Dog).Name)

	// Are they equal? NO!
	fmt.Printf("dog == animals[0]: %v\n", dog == animals[0])               // compilation error
	fmt.Printf("dog == animals[0].(Dog): %v\n", dog == *animals[0].(*Dog)) // false - different instances

	for _, a := range animals {
		fmt.Printf("Type: %T, Value: %v\n", a, a)
		fmt.Println(a.Speak())
	}
}
