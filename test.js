class BNode{
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
        const newNode = new  BNode(value)
        if(this.root == null ) {
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode){
        if( newNode.value < node.value ){
            if(node.left === null ) {
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null ) {
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    search(node,value){
        if(!node) return false

        if(node.value === value ) return true
        if(node.value > value ) return this.search(node.left,value)
        return this.search(node.right,value)
    }

    preOrderTraversal(root){
        if(root === null ) return
        console.log(root.value);
        this.preOrderTraversal(root.left)
        this.preOrderTraversal(root.right)
    }
    kthelement(root,k){
        const result = []
        function inorder(root){
            if(root === null ) return
            
            inorder(root.left)
            result.push(root.value)
            inorder(root.right)
        }
        inorder(root)
        console.log(result)
        return result[k-1]
    }
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root,value){
        if(root === null ) return root
        if(value < root.value) 
            root.left = this.deleteNode(root.left,value)
        else if(value > root.value )
            root.right = this.deleteNode(root.right,value)
        else{
            if(!root.left && !root.right){
                return null
            } 
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    min(node){
        if(!node.left ) return node.value 
        else {
            return this.min(node.left)
        }
    }
    height(){
        if(node = null)
    }
}

const BST = new BinarySearchTree()

BST.insert(10)
BST.insert(8)
BST.insert(14)
BST.insert(18)
BST.insert(5)

BST.preOrderTraversal(BST.root)
console.log(BST.kthelement(BST.root,1))