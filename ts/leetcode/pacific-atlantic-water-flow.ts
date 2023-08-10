interface Graph {
  atlantic: boolean;
  pacific: boolean;
}

interface Point {
  x: number;
  y: number
}

function getKey({x, y}: Point) {
  return JSON.stringify([y,x]);
}
let callSize = 0;


export function pacificAtlantic2(matrix: number[][]): number[][] {
    if (!matrix || !matrix.length) {
        return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));

    // DFS to mark cells that can reach Pacific
    for (let row = 0; row < rows; row++) {
        dfs(matrix, pacific, row, 0);
    }
    for (let col = 0; col < cols; col++) {
        dfs(matrix, pacific, 0, col);
    }

    // DFS to mark cells that can reach Atlantic
    for (let row = rows - 1; row >= 0; row--) {
        dfs(matrix, atlantic, row, cols - 1);
    }
    for (let col = cols - 1; col >= 0; col--) {
        dfs(matrix, atlantic, rows - 1, col);
    }

    // Find cells that can reach both Pacific and Atlantic
    const result = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (pacific[row][col] && atlantic[row][col]) {
                result.push([row, col]);
            }
        }
    }
    console.log(callSize)
    return result;
}

function dfs(matrix: number[][], visited: boolean[][], row: number, col: number): void {
    visited[row][col] = true;
    callSize++;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow < 0 || newRow >= matrix.length || newCol < 0 || newCol >= matrix[0].length) {
            continue;
        }
        if (visited[newRow][newCol] || matrix[newRow][newCol] < matrix[row][col]) {
            continue;
        }
        dfs(matrix, visited, newRow, newCol);
    }
}


export function pacificAtlantic(heights: number[][]): number[][] {
  let xLength = heights[0].length;
  let yLength = heights.length;

  let pointMap: Record<string, Graph> = {}

  function buildGraph(
    {x, y}: Point,
    atlantic: boolean,
    pacific: boolean,
    preValue: number,
    visited: Set<string>
  ) {
    let key = getKey({x, y});
    if (visited.has(key)) {
      return
    }
    if (x >= xLength || x < 0 || y >= yLength || y < 0) {
      return;
    }
    const currentHeight = heights[y][x];
    if (currentHeight < preValue) {
      return;
    }
    callSize++;

    visited.add(key)

    let currentPoint = pointMap[key];
    if (!currentPoint) {
      currentPoint = {
        atlantic,
        pacific,
      }
      pointMap[key] = currentPoint;
    } else if (currentPoint.pacific !== pacific && currentPoint.atlantic !== atlantic) {
      currentPoint.pacific ||= pacific;
      currentPoint.atlantic ||= atlantic;
    } else {
      return;
    }

    buildGraph({x: x + 1, y}, atlantic, pacific, currentHeight, visited);
    buildGraph({x: x - 1, y}, atlantic, pacific, currentHeight, visited);
    buildGraph({x, y: y + 1}, atlantic, pacific, currentHeight, visited);
    buildGraph({x, y: y - 1}, atlantic, pacific, currentHeight, visited);
  }

  for (let y = 0; y < yLength; y++) {
    buildGraph({y, x: 0}, false, true, -Infinity, new Set())
    buildGraph({y, x: xLength - 1}, true, false, -Infinity, new Set())
  }
  for (let x = 0; x < xLength; x++) {
    buildGraph({x, y: 0}, false, true, -Infinity, new Set())
    buildGraph({x, y: yLength - 1}, true, false, -Infinity, new Set())
  }
  console.log(callSize)
  return Object.entries(pointMap).filter(([k,v]) => v.pacific && v.atlantic).map(([k,v]) => JSON.parse(k));
}
