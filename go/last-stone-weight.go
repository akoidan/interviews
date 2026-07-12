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
	return h.data[len(h.data) - 1]
}

func (h *Heap) TopRemove(a int) int {
	res := h.Top()

	
	return res
}

func (h *Heap) checkIfSwap(i int) {
	p := parentIndex(i)
	if h.data[i] > h.data[p] {
		h.swap(p, i)
		h.checkIfSwap(p)
	}
}
