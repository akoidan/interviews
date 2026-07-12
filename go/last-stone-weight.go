// https://neetcode.io/problems/last-stone-weight/question?list=neetcode150
func lastStoneWeight(stones []int) int {
	heap := Heap{
		data: make([]int, len(stones)),
	}
	for _, e := range stones {
		heap.Add(e)
	}
	return 0
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


func (h *Heap) Extract() int {
	if len(h.data) == 0 {
		return 0
	}
	res := h.Top()
	last := h.data[len(h.data) - 1]
	h.data[0] = last
	delete(h.data, 1)
	h.heapify(0)
	return res
}

func (h *Heap) heapify(i int) {
	lci := leftIndex(i)
	rci := rightIndex(i)
	if len(h.data) < lci  {
		return
	}
	var maxI int 
	if len(h.data) < rci {
		maxI = rci
	} else if h.data[lci] > h.data[rci] {
		maxI = lci
	} else {
		maxI = rci
	}
	if h.data[i] > h.data[maxI] {
		h.swap(maxI, i)
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
