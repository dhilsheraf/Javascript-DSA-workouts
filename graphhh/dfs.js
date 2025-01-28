function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node); // Process the node

    for (let neighbor of graph[node]) {
        dfs(graph, neighbor, visited);
    }
}

// Example Graph (Same as BFS)
dfs(graph, 0);
