package maxareaofislands

func maxAreaOfIsland(grid [][]int) int {
	if len(grid) == 0 {
		return 0
	}
	visited := make(map[Point]bool)
	area := 0
	for y := 0; y < len(grid); y++ {
		for x := 0; x < len(grid[0]); x++ {
			area = max(area, dfs(grid, Point{x, y}, visited))
		}
	}
	return area
}

func dfs(grid [][]int, p Point, visited map[Point]bool) int {
	if p.x < 0 || p.y < 0 || p.y >= len(grid) || p.x >= len(grid[0]) {
		return 0
	}
	if grid[p.y][p.x] == 0 {
		return 0
	}
	if visited[p] {
		return 0
	}
	visited[p] = true
	return 1 + dfs(grid, Point{p.x - 1, p.y}, visited) +
		dfs(grid, Point{p.x, p.y - 1}, visited) +
		dfs(grid, Point{p.x + 1, p.y}, visited) +
		dfs(grid, Point{p.x, p.y + 1}, visited)
}
