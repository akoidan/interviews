/*
"You are given an undirected graph consisting of N vertices, numbered from 1 to N, and M edges.

The graph is described by two arrays, A and B, both of length M. A pair (A[K], B[K]), for K from 0 to M-1, describes an edge between vertex A[K] and vertex B[K].

Your task is to check whether the given graph contains a path from vertex 1 to vertex N going through all of the vertices, one by one, in increasing order of their numbers. All connections on the path should be direct.

Write a function:

function solution(N, A, B);

that, given an integer N and two arrays A and B of M integers each, returns true if there exists a path from vertex 1 to N going through all vertices, one by one, in increasing order, or false otherwise.

Examples:

1. Given N = 4, A = [1, 2, 4, 4, 3] and B = [2, 3, 1, 3, 1], the function should return true. There is a path (1 → 2 → 3 → 4) using edges (1, 2), (2, 3) and (4, 3).

2. Given N = 4, A = [1, 2, 1, 3] and B = [2, 4, 3, 4], the function should return false. There is no path (1 → 2 → 3 → 4), as there is no direct connection from vertex 2 to vertex 3.

3. Given N = 6, A = [2, 4, 5, 3] and B = [3, 5, 6, 4], the function should return false. There is no direct connection from vertex 1 to vertex 2.

4. Given N = 3, A = [1, 3] and B = [2, 2], the function should return true. There is a path (1 → 2 → 3) using edges (1, 2) and (3, 2).

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
M is an integer within the range [0..100,000];
all elements of arrays A and B are integers within the range [1..N];
there are no self-loops (edges with A[K] = B[K]) in the graph;
there are no multiple edges between the same vertices."
 */


type GraphModel =  Record<number, number[]>;


/**
 * Get map of where the key is an vertice and value is map of connected vertice
 * this map is bidirectinal, meaning keys have duplicated values
 * e.g.  [1, 2, 4, 4, 3], [2, 3, 1, 3, 1] -> { '1': [ 2, 4, 3 ], '2': [ 1, 3 ], '3': [ 2, 4, 1 ], '4': [ 1, 3 ] }
 * Complexity = 0(n)
 * */
function getOrderedStructure(a: number[], b: number[]) : GraphModel {
  if (a.length != b.length) {
    throw Error("Invalid input")
  }

  let resultDict:  GraphModel= {}
  a.forEach((ai, i) => {
    let bi = b[i];
    if (resultDict[bi] === undefined) {
      resultDict[bi] = []
    }
    if (resultDict[ai] === undefined) {
      resultDict[ai] = []
    }
    resultDict[bi].push(ai)
    resultDict[ai].push(bi)
  });
  return resultDict;
}


function checkIfElementsHaveAppropriateNumberConnections(resultDict: Record<number, number>, n: number) {
  delete resultDict[1]; // 1st element is only 1 connection
  delete resultDict[n]; // last element is only 1 connect
  // delete both to check if others have single connection
  // hacky way to check that not vertices are connected to only 1 sibling, but to both of them
  let values = Object.values(resultDict);
  if (values.length === 0 ) {
    return true;
  }
  // check if 1 element has 2 connection
  if (values[0] !== 2) {
    return false;
  }
  // and all elements are the same
  // Can also use Object.keys(values).every((k) => obj[k] === 2)
  return new Set(values).size === 1;
}

function solution(n: number, a: number[], b: number[]) {
  let resultDict: Record<number, number> = {};
  a.forEach((ai, i) => {
    let bi = b[i];
    if (Math.abs(ai - bi) > 1) { // we are not interested in non-direct connections
      return
    }
    if (resultDict[ai]) {
      resultDict[ai] = 2;
    } else {
      resultDict[ai] = 1;
    }
    if (resultDict[bi]) {
      resultDict[bi] = 2;
    } else {
      resultDict[bi] = 1;
    }
  });
  let numberOfDirectVertices = Object.values(resultDict);

  // check if there are no vertices in the air (not-connected)
  if (numberOfDirectVertices.length < n) {
    return false;
  }
  return checkIfElementsHaveAppropriateNumberConnections(resultDict, n); //
}
function solution2(n: number, a: number[], b: number[]): boolean {

  let edges: GraphModel = getOrderedStructure(a, b); // O(n)
  for (let i=1; i < n; i++) {
    if (!edges[i]) {
      console.log(`Vertice ${i} is not connected anywhere`)
      return false;
    }
    if (edges[i].indexOf(i+1) < 0) {
      console.log(`Vertice ${i} is not connected with ${i+1}`)
      return false;
    }
  }
  return true;
}


export {solution};