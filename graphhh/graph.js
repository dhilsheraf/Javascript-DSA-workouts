class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1]?.has(vertex2) &&
               this.adjacencyList[vertex2]?.has(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1]?.delete(vertex2);
        this.adjacencyList[vertex2]?.delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]].join(", "));
        }
    }
    bfs(start){
        if(!this.adjacencyList[start]) {
            console.log("Error the node is not found in the graph")
            return 
            
        }
        let queue = [start]
        let visited = new Set()
        visited.add(start)
        while(queue.length){
            let node = queue.shift()
            console.log(node)
            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }
    dfs( node, visited = new Set()){
        if(visited.has(node)) return 
        console.log(node)
        visited.add(node)
        for(let neighbour of this.adjacencyList[node]){
            if(!visited.has(neighbour)){
                this.dfs(neighbour,visited)
            }
        }
    }
    dfscycleDetection(node,visited,parent){
        visited.add(node)
        for(let neighbour of this.adjacencyList[node]){
            if(!visited.has(neighbour)){
                if(this.dfscycleDetection(neighbour,visited,node)) {
                    return true
                }
            }else if(neighbour !== parent){
                return true
            }
        }
        return false
    }
    hasCycle(){
        let visited = new Set()
        for(let vertex in this.adjacencyList){
           if(!visited.has(vertex)){
            if(this.dfscycleDetection(vertex,visited,null)){
                return true
            }
           } 
        }
        return false
    }
    bfsShortestPath(start,end){
        if(!this.adjacencyList[start] || !this.adjacencyList[end]){
            return "One or both node not found in the graph"
        }

        let queue = [[start]]
        let visited = new Set()
        while(queue.length){
            let path = queue.shift()
            let node = path[path.length-1]
            if(node == end) return path
            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push([...path,neighbour])
                }
            }
        }
        return false
    }

}

// Example Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("Althaf")

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A","Althaf")
// graph.addEdge("A","C")

console.log("Graph Before:");
graph.display();
console.log("Has Edge (A, C):", graph.hasEdge("A", "C"));

// graph.removeVertex("A"); // ✅ Corrected
console.log("Graph After Removing Vertex A:");
graph.display();


console.log("Adjacency List:", graph.adjacencyList);
console.log("Bfs of graph")
graph.bfs("A")
console.log("DFS of graph")
graph.dfs("A")

console.log(graph.hasCycle())
console.log(graph.bfsShortestPath("A","C"))