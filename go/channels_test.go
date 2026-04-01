package main

import (
	"fmt"
	"sync"
	"testing"
)

// Basic channel: one goroutine sends, main receives
func basicChannel() {
	ch := make(chan int)

	go func() {
		ch <- 42
	}()

	val := <-ch
	fmt.Println("received:", val)
}

// Buffered channel: sender doesn't block until buffer is full
func bufferedChannel() {
	ch := make(chan string, 3)

	ch <- "a"
	ch <- "b"
	ch <- "c"

	fmt.Println(<-ch) // a
	fmt.Println(<-ch) // b
	fmt.Println(<-ch) // c
}

// Fan-out: one channel, multiple goroutines consuming
func fanOut() {
	jobs := make(chan int, 5)
	var wg sync.WaitGroup

	// 3 workers
	for w := 0; w < 3; w++ {
		wg.Add(1)
		go func(id int) {
			defer wg.Done()
			for j := range jobs {
				fmt.Printf("worker %d processed job %d\n", id, j)
			}
		}(w)
	}

	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs) // signals workers there are no more jobs
	wg.Wait()
}

// Pipeline: chain of goroutines, output of one is input of next
func pipeline() {
	naturals := make(chan int)
	doubled := make(chan int)

	// stage 1: generate numbers
	go func() {
		for i := 1; i <= 5; i++ {
			naturals <- i
		}
		close(naturals)
	}()

	// stage 2: double them
	go func() {
		for n := range naturals {
			doubled <- n * 2
		}
		close(doubled)
	}()

	// stage 3: print
	for d := range doubled {
		fmt.Println(d)
	}
}

// Done channel: cancel a goroutine from outside
func doneChannel() {
	done := make(chan struct{})
	results := make(chan int)

	go func() {
		for i := 0; ; i++ {
			select {
			case <-done:
				fmt.Println("goroutine stopped")
				return
			case results <- i:
			}
		}
	}()

	fmt.Println(<-results) // 0
	fmt.Println(<-results) // 1
	fmt.Println(<-results) // 2
	close(done)            // signal goroutine to stop
}

func TestChannels(t *testing.T) {
	fmt.Println("--- basic ---")
	basicChannel()

	fmt.Println("--- buffered ---")
	bufferedChannel()

	fmt.Println("--- fan-out ---")
	fanOut()

	fmt.Println("--- pipeline ---")
	pipeline()

	fmt.Println("--- done channel ---")
	doneChannel()
}
