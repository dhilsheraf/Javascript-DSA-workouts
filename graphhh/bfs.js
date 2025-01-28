function bfs(graph, start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node); // Process the node

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Example Graph
let graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5, 6],
    3: [1],
    4: [1],
    5: [2],
    6: [2]
};

bfs(graph, 0);
