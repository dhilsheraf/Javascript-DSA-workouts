// Define an N-ary Tree Node
class NaryNode {
    constructor(value) {
        this.value = value;
        this.children = []; // Each node can have multiple children
    }
}

// Define the N-ary Tree Class
class NaryTree {
    constructor(rootValue) {
        this.root = new NaryNode(rootValue); // Initialize with a root node
    }

    // Insert a child under a given parent node
    insert(parentValue, newValue) {
        const parentNode = this.findNode(this.root, parentValue);
        if (parentNode) {
            parentNode.children.push(new NaryNode(newValue));
        } else {
            console.log(`Parent node ${parentValue} not found.`);
        }
    }

    // Helper function to find a node using BFS
    findNode(root, value) {
        if (!root) return null;
        let queue = [root];

        while (queue.length) {
            let current = queue.shift();
            if (current.value === value) return current;
            queue.push(...current.children);
        }

        return null;
    }

    // Breadth-First Search (BFS) Traversal
    bfsTraversal() {
        if (!this.root) return;
        let queue = [this.root];

        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            queue.push(...current.children);
        }
    }

    // Depth-First Search (DFS) Traversal (Preorder)
    dfsTraversal(node = this.root) {
        if (!node) return;
        console.log(node.value); // Process node
        for (let child of node.children) {
            this.dfsTraversal(child);
        }
    }
}

// Example Usage
const tree = new NaryTree(1);
tree.insert(1, 2);
tree.insert(1, 3);
tree.insert(1, 4);
tree.insert(2, 5);
tree.insert(2, 6);
tree.insert(3, 7);
tree.insert(3, 8);
tree.insert(4, 9);
tree.insert(4, 10);

console.log("BFS Traversal:");
tree.bfsTraversal();

console.log("DFS Traversal:");
tree.dfsTraversal();
