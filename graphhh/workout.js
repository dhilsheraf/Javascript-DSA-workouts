class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '->'+[...this.adjacencyList[vertex]].join(", "));      
        }
    }
    bfs(start) {
        let queue = [start];
        let visited = new Set();
        visited.add(start);

        while (queue.length > 0) {
            let vertex = queue.shift(); // Dequeue
            console.log(vertex); // Process node

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor); // Enqueue neighbors
                }
            }
        }
    }
    dfs(start, visited = new Set()) {
        if (visited.has(start)) return;

        console.log(start); // Process node
        visited.add(start);

        for (let neighbor of this.adjacencyList[start]) {
            this.dfs(neighbor, visited); // Recur for unvisited neighbors
        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","D")
graph.addEdge("D","A")
graph.display()



