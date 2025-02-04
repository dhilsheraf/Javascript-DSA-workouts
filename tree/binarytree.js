class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new TreeNode(value)
        if (this.root === null) {
            this.root = newNode
            return
        }

        let queue = [this.root];

        while (queue.length > 0) {
            let node = queue.shift()

            if (node.left === null) {
                node.left = newNode
                return
            } else {
                queue.push(node.left)
            }

            if (node.right === null) {
                node.right = newNode
                return
            }
            else {
                queue.push(node.right)
            }
        }

    }
    preOrderTraversal(node) {
        if (node === null) return;
        console.log(node.value);
        this.preOrderTraversal(node.left)
        this.preOrderTraversal(node.right)
    }
    inOrderTraversal(node) {
        if (node === null) return
        this.inOrderTraversal(node.left)
        console.log(node.value);
        this.inOrderTraversal(node.right)
    }
    postOrderTraversal(node) {
        if (node === null) return
        this.postOrderTraversal(node.left)
        this.postOrderTraversal(node.right)
        console.log(node.value);

    }
    search(value) {
        if (this.root == null) return false

        let queue = [this.root]
        while (queue.length > 0) {
            let node = queue.shift()
            if (node.value === value) return true
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return false
    }
    height(node) {
        if (node === null) return -1
        let leftHeight = this.height(node.left)
        let rightHeight = this.height(node.right)
        return Math.max(leftHeight, rightHeight) + 1
    }
    findLeastCommonAncestor(node, x, y) {
        if (node === null) return null
        if (node.value === x || node.value === y) return node

        let leftLCA = this.findLeastCommonAncestor(node.left, x, y)
        let rightLCA = this.findLeastCommonAncestor(node.right, x, y)

        if (leftLCA && rightLCA) return node
        return leftLCA !== null ? leftLCA : rightLCA
    }
    isBalanced(node) {
        function checkHeight(node) {
            if (node === null) return 0;
            let leftHeight = checkHeight(node.left);
            let rightHeight = checkHeight(node.right);

            if (Math.abs(leftHeight - rightHeight) > 1) return -1;
            return Math.max(leftHeight, rightHeight) + 1;
        }
        return checkHeight(node) !== -1;
    }
    size(node) {
        if (node === null) return 0
        return 1 + (this.size(node.left) + this.size(node.right))
    }
    mirror(node) {
        if (node === null) return 0
        const temp = node.left
        node.left = this.mirror(node.right)
        node.right = this.mirror(temp)

        return node
    }
    isSymmetric(root) {
        if (root === null) return true;
        return isMirror(root.left, root.right);
    }

    isMirror(left, right) {
        if (left === null && right === null) return true; // Both subtrees are empty
        if (left === null || right === null) return false; // One subtree is empty
        return (
            left.value === right.value && // Values must match
            isMirror(left.left, right.right) && // Outer subtrees must mirror
            isMirror(left.right, right.left) // Inner subtrees must mirror
        );
    }
}

const tree = new BinaryTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.insert(6)
tree.insert(7)
tree.insert(8)
tree.preOrderTraversal(tree.root)

console.log("Height of the tree : " + tree.height(tree.root));
