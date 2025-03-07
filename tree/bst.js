class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty())
            this.root = newNode
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if (!root) return false
        else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }

    }
    levelOrder() {
        //the optimized queue
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {   
                queue.push(curr.right)
            }
        }
    }
    
    // levelOrder(){
    //     if(this.root === null ) return []
    //     let queue = [this.root]
    //     const result = []
    //     while(queue.length){
    //         const node = queue.shift()
    //         result.push(node.value)
    //         if(node.left !== null ) queue.push(node.left)
    //         if(node.right !== null ) queue.push(node.right)
    //     }
    // return result
    // }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null)
            return root
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        }
        else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    findClosest(root,target){
        let closest = root.value
        
        while(root !== null ){
            if(Math.abs(root.value - target ) < Math.abs(closest-target))
                closest = root.value
            if(target < root.value) {
                root = root.left
            }else if(target > root.value){
                root = root.right
            }
            else{
                break;
            }
        }
        return closest
    }
    checkBST(root,min = -Infinity,max =Infinity){
        if(root === null ) return true
        if(root.value <= min || root.value >= max ) return false

        return (
            this.checkBST(root.left,min,root.value) &&
            this.checkBST(root.right,root.value,max))
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
    height(node){
        if(node === null ) return -1 
        let left = this.height(node.left)
        let right = this.height(node.right)

        return Math.max(left,right) +1
    }
    findLeaf(node){
        if(!node) return []
        if(!node.right && !node.left) return [node.value]
        return [...this.findLeaf(node.right),...this.findLeaf(node.right)]
    }
    height(node){
        if(node === null ) return -1
        let left = this.height(node.left)
        let right = this.height(node.right)
        return Math.max(left,right) +1
    }
    same(root1,root2){
        if(!root1 && !root2)  return true
        if(!root1 || !root2 ) return false


        return(
            root1.value === root2.value
            && this.same(root1.left,root2.left) &&
            this.same(root1.right ,root2.right)
        )
    }
    getRoot(root1,value){
        
        if(root1.value === value) return root1
        if(!root1) return null
        this.getRoot(root1.left)
        this.getRoot(root1.right)
    }
    isSubtree(root1,root2){
        console.log(root1)
        let orgRoot1 = this.getRoot(root1,root2.value)
        
        return console.log(orgRoot1.value)
    }
// travel throgu 1 first tree and find root of second tree then need to travel through both tree and compare the node and value if ith shoe
// it is same we can stop traversal when the subtree is ended so we can return true 
//
}


const bst = new BinarySearchTree()

// console.log(`Is the tree is empty?`,bst.isEmpty());
// bst.insert(50)
// bst.insert(40)
// bst.insert(60)
// bst.insert(25)
// bst.insert(75)
// console.log(bst.search(bst.root,25));
// console.log(bst.search(bst.root,10));
// console.log("pre order search");
// bst.preOrder(bst.root)
// console.log("inorder search");
// bst.inOrder(bst.root)
// console.log("Post order search")
// bst.postOrder(bst.root)
// console.log("breadth first search level order");
// bst.levelOrder()

// console.log("Max value of the binary search tree",bst.max(bst.root))
// console.log("Min value of the binary search tree",bst.min(bst.root));

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(12)
bst.insert(17)
bst.inOrder(bst.root)
console.log(bst.height(bst.root))
// bst.levelOrder()
// bst.delete(15)
// console.log("---------------");
// bst.levelOrder()
// console.log(bst.findClosest(bst.root,16));
// console.log(bst.checkBST(bst.root));
// console.log("The second largest is : ",bst.secondLargest());


const bst1 = new BinarySearchTree()


bst1.insert(3)
bst1.insert(12)
bst1.insert(16)

console.log(bst.same(bst.root,bst1.root))

bst.isSubtree(bst.root,bst1.root)

