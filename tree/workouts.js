//AVL tree Adelson-Velsky and Landis tree is a self balancing tree

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null ) this.root = newNode
        else{
            this.insertNode(this.root ,newNode)
        }
    }
    insertNode(node,newNode){
        if( newNode.value < node.value ){
            if(node.left === null ) node.left = newNode
            else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null ) node.right = newNode
            else this.insertNode(node.right,newNode)
        }
    }
    secondLargest(){
        if(!this.root ||(!this.root.left && !this.root.right) ){
            console.log("Tree must have at least two node");
            return null
        }
        let curr = this.root
        let parent = null

        while(curr.right){
            parent = curr
            curr = curr.right
        }
        if(curr.left){
            let secondLargest = curr.left
            while(secondLargest.right){
                secondLargest = secondLargest.right
            }
            return secondLargest.value
        }

        return parent.value
    }
    preOrderTraversal(root){
        if(root !== null){
        console.log(root.value);
        this.preOrderTraversal(root.left)
        this.preOrderTraversal(root.right)
    }}
}

const tree = new BinarySearchTree()
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(25);
tree.insert(40);
tree.insert(35);
tree.insert(50);
tree.preOrderTraversal(tree.root)
console.log("Second Largest:", tree.secondLargest());