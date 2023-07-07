/*
* https://leetcode.com/problems/max-area-of-island/description/
* 695. Max Area of Island
*
* You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
* The area of an island is the number of cells with a value 1 in the island.
* Return the maximum area of an island in grid. If there is no island, return 0.
*
* */

export function maxAreaOfIsland(grid: number[][]): number {
  let visited: Set<string> = new Set();
  let maxIsland = 0;

  function dfs(y: number, x: number): number {
    if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length || grid[y][x] == 0) {
      return 0;
    }
    let point = JSON.stringify([y, x]);
    if (visited.has(point)) {
      return 0;
    }
    let area = 1;
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    visited.add(point);
    for (const [dy, dx] of directions) {
      area += dfs(y + dy, x + dx);
    }
    return area;
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      let area = dfs(y, x)
      maxIsland = Math.max(area, maxIsland);
    }
  }
  return maxIsland;
}
