class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
        this.height = 1

    }
}

class AVLtree{
    constructor(){
        this.root =null;
    }
    getHeight(node){
        this.node ? this.node.height : 0
    }
    getBalanceFactor(node){
        return node ? this.getHeight(node.left) - this.getHeight(node.right):0
    }
    rightRotate(y){
        let x = y.left
        let T2 = y.right
        x.right = y
        y.left = T2
        y.height = Math.max(this.getHeight(y.left),this.getHeight(y.right))+1
        x.height = Math.max(this.getHeight(x.left),this.getHeight(x.right)) +1

        return x
    }
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(node, value) {
        if (!node) return new Node(value);

        if (key < node.value) node.left = this.insert(node.left, value);
        else if (key > node.value) node.right = this.insert(node.right, value);
        else return node; // No duplicate keys allowed

        // Update height
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get balance factor
        let balance = this.getBalanceFactor(node);

        // Perform rotations if needed
        if (balance > 1 && value < node.left.value) return this.rightRotate(node); // LL Case
        if (balance < -1 && value > node.right.value) return this.leftRotate(node); // RR Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node); // LR Case
        }
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node); // RL Case
        }

        return node;
    }

    add(value){
        this.root = this.insert(value)
    }
    inOrder(node){
        if(node){
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }
}























// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class AVLtree {
//     constructor() {
//         this.root = null;
//     }

//     // Compute height dynamically (inefficient)
//     getHeight(node) {
//         if (!node) return 0;
//         return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
//     }

//     // Compute balance factor dynamically
//     getBalanceFactor(node) {
//         return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
//     }

//     // Right Rotation (LL case)
//     rightRotate(y) {
//         let x = y.left;
//         let T2 = x.right;

//         x.right = y;
//         y.left = T2;

//         return x;
//     }

//     // Left Rotation (RR case)
//     leftRotate(x) {
//         let y = x.right;
//         let T2 = y.left;

//         y.left = x;
//         x.right = T2;

//         return y;
//     }

//     // Insert function without storing height
//     insert(node, value) {
//         if (!node) return new Node(value);

//         if (value < node.value) node.left = this.insert(node.left, value);
//         else if (value > node.value) node.right = this.insert(node.right, value);
//         else return node; // No duplicate values

//         // Compute balance factor dynamically
//         let balance = this.getBalanceFactor(node);

//         // Perform rotations if needed
//         if (balance > 1 && value < node.left.value) return this.rightRotate(node); // LL Case
//         if (balance < -1 && value > node.right.value) return this.leftRotate(node); // RR Case
//         if (balance > 1 && value > node.left.value) {
//             node.left = this.leftRotate(node.left);
//             return this.rightRotate(node); // LR Case
//         }
//         if (balance < -1 && value < node.right.value) {
//             node.right = this.rightRotate(node.right);
//             return this.leftRotate(node); // RL Case
//         }

//         return node;
//     }

//     add(value) {
//         this.root = this.insert(this.root, value);
//     }

//     // Inorder Traversal
//     inOrder(node) {
//         if (node) {
//             this.inOrder(node.left);
//             console.log(node.value);
//             this.inOrder(node.right);
//         }
//     }

//     printTree() {
//         this.inOrder(this.root);
//     }
// }

// // Example usage
// let tree = new AVLtree();
// tree.add(10);
// tree.add(20);
// tree.add(30);
// tree.add(40);
// tree.add(50);
// tree.add(25);

// console.log("Inorder traversal of the AVL Tree:");
// tree.printTree();
