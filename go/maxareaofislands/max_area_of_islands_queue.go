package maxareaofislands

func maxAreaOfIslandQueue(grid [][]int) int {
	if len(grid) == 0 {
		return 0
	}
	visited := make(map[Point]bool)
	area := 0
	for y := 0; y < len(grid); y++ {
		for x := 0; x < len(grid[0]); x++ {
			area = max(area, dfs_queue(grid, Point{x, y}, visited))
		}
	}
	return area
}

func dfs_queue(grid [][]int, input Point, visited map[Point]bool) int {
	stack := []Point{}
	area := 0
	stack = append(stack, input)
	for len(stack) > 0 {
		p := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		if p.x < 0 || p.y < 0 || p.y >= len(grid) || p.x >= len(grid[0]) {
			continue
		}
		if grid[p.y][p.x] == 0 {
			continue
		}
		if visited[p] {
			continue
		}
		visited[p] = true
		area += 1
		stack = append(stack,
			Point{p.x - 1, p.y},
			Point{p.x, p.y - 1},
			Point{p.x + 1, p.y},
			Point{p.x, p.y + 1},
		)
	}
	return area
}
