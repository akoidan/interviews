export function findRedundantConnection(edges: number[][]): number[] {
  // acts like a Map
  let verticesParents: number[] = Array.from({ length: edges.length + 1 }, (v, i) => i);

  function findParent(edge: number): number {
    let p = edge;
    while (p !== verticesParents[p]!) {
      p = verticesParents[p];
    }
    return p;
  }

  for (let edge of edges) {
      let p1 = findParent(edge[0])
      let p2 = findParent(edge[1])
      if (p1 == p2) {
        return edge
      } else if (p1 < p2) {
        verticesParents[p2] = p1;
      } else {
        verticesParents[p1] = p2;
      }
  }
  throw Error("No cycle")
}
