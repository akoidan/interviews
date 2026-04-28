
type Point struct {
	Y,X int
}

type PointsQueue []Point

func islandsAndTreasure(grid [][]int) {
	nodes := []Point{}

	INF := 2^31 - 1

	for y := range grid {
		for x := range grid[y] {
			if grid[y][x] == INF {
				nodes = append(nodes, Point{y,x})
			}
		}
	}

	var bfs func (x int, y int)

	queues := [][]int{}
	for _, node := range nodes {
		queue := PointsQueue{}
		queue.append(node)
	}

	bfs = func(x int, y int) {

	}  

}

func (this *PointsQueue) append(p Point) {
	*this := append(*this, Point{p.Y - 1, P.x})
	*this = append(*this, Point{p.Y, p.X+1})
	*this = append(*this, Point{p.Y-1, p.X})
	*this = append(*this, Point{p.Y, p.X-1})
}
