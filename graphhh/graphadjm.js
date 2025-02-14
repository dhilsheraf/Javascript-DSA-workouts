class GraphMatrix {
    constructor(size) {
        this.size = size;
        this.adjMatrix = Array(size).fill(null).map(() => Array(size).fill(0));
    }

    // Add a new vertex (resize the matrix)
    addVertex() {
        this.size++; // Increase the size
        let newMatrix = Array(this.size).fill(null).map(() => Array(this.size).fill(0));

        // Copy old matrix values to the new matrix
        for (let i = 0; i < this.size - 1; i++) {
            for (let j = 0; j < this.size - 1; j++) {
                newMatrix[i][j] = this.adjMatrix[i][j];
            }
        }

        this.adjMatrix = newMatrix; // Replace with new matrix
    }

    // Add an edge between vertices
    addEdge(v1, v2, isDirected = false) {
        if (v1 >= this.size || v2 >= this.size) {
            console.log(`Invalid vertex: ${v1} or ${v2}`);
            return;
        }
        this.adjMatrix[v1][v2] = 1;
        if (!isDirected) {
            this.adjMatrix[v2][v1] = 1;
        }
    }

    // Remove an edge
    removeEdge(v1, v2) {
        if (v1 >= this.size || v2 >= this.size) {
            console.log(`Invalid vertex: ${v1} or ${v2}`);
            return;
        }
        this.adjMatrix[v1][v2] = 0;
        this.adjMatrix[v2][v1] = 0;
    }

    // Display matrix
    display() {
        console.log("\nAdjacency Matrix:");
        this.adjMatrix.forEach(row => console.log(row.join(" ")));
    }
}

// Example Usage
const g = new GraphMatrix(3);
g.addEdge(0, 1);
g.addEdge(0, 2);

console.log("\nGraph Before Adding Vertex:");
g.display();

console.log("\nAdding a New Vertex...");
g.addVertex();
g.display();

console.log("\nAdding Edge (3-1)...");
g.addEdge(3, 1);
g.display();
