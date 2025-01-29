function dfs(graph, start, visited) {
    if (visited === void 0) { visited = new Set(); }
    // 開始ノードを巡回済みとしてマーク
    visited.add(start);
    console.log(start); //巡回したノードを表示
    for (var _i = 0, _a = graph[start]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
var graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: [],
};
dfs(graph, "A");
