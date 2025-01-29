type Graph = {
  [key: string]: string[];
};

function dfs(
  graph: Graph,
  start: string,
  visited: Set<string> = new Set()
): void {
  // 開始ノードを巡回済みとしてマーク
  visited.add(start);
  console.log(start); //巡回したノードを表示

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

const graph: Graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

dfs(graph, "A");
