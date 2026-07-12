
// https://neetcode.io/problems/last-stone-weight/question?list=neetcode150
func lastStoneWeight(stones []int) int {
	heap := Heap{
		data: make([]int, 0, len(stones)),
	}
	if len(stones) == 0 {
		return 0
	}
	for _, e := range stones {
		heap.Add(e)
		fmt.Printf("%v\n", heap.data)
	}
	fmt.Printf("\n\n\n")
	for {
		fmt.Printf("\n new cycle %v\n", heap.data)
		one := heap.Extract()
		fmt.Printf("-%v\n", heap.data)
		if one == nil {
			return 0
		}
		two := heap.Extract()
		fmt.Printf("-%v\n",heap.data)
		if two == nil {
			return *one
		}
		if *one > *two {
			heap.Add(*one - *two)
			fmt.Printf("+%v\n",heap.data)
		}
	}
}

type Heap struct {
	data []int
}

func parentIndex(c int) int {
	return (c - 1) / 2
}

func leftIndex(p int) int {
	return 2 * p + 1
}

func rightIndex(p int) int {
	return 2 * p + 2
} 

func (h *Heap) swap(i, j int) {
	tmp := h.data[i]
	h.data[i] = h.data[j]
	h.data[j] = tmp
}

func (h *Heap) Add(a int) {
	i := len(h.data)
	h.data = append(h.data, a)
	h.checkIfSwap(i)
}

func (h *Heap) Top() int {
	if len(h.data) > 0 {
		return h.data[0]
	}
	return 0
}


func (h *Heap) Extract() *int {
	fmt.Printf("extract from %v\n", h.data)
	if len(h.data) == 0 {
		return nil
	}
	res := h.data[0]
	last := h.data[len(h.data) - 1]
	h.data[0] = last
	h.data = h.data[:len(h.data) - 1]
	fmt.Printf("before heap: %v\n", h.data)
	h.heapify(0)
	return &res
}

func (h *Heap) heapify(i int) {
	fmt.Printf("heapify %d\n", i)
	lci := leftIndex(i)
	rci := rightIndex(i)
	fmt.Printf("i:%d l:%d r:%d\n", i, lci, rci)
	if len(h.data) <= lci  {
		fmt.Printf("heapify finished\n")
		return
	}
	var maxI int 
	if len(h.data) <= rci {
		maxI = lci
	} else if h.data[lci] > h.data[rci] {
		maxI = lci
	} else {
		maxI = rci
	}
	fmt.Printf("Before if\n")
	if h.data[i] < h.data[maxI] {
		h.swap(maxI, i)
		fmt.Printf("after swap %v\n", h.data)
		h.heapify(maxI)
	}
}


func (h *Heap) checkIfSwap(i int) {
	p := parentIndex(i)
	if h.data[i] > h.data[p] {
		h.swap(p, i)
		h.checkIfSwap(p)
	}
}
