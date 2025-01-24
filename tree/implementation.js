// Implementation of tree Data structure generic tree
class Node {
    constructor(value){
        this.value = value
        this.children = []
    }
}

class Tree{
    constructor(root){
        this.root = new Node(root)
    }
    //add child to a specific node 
    addChild(parentValue,childValue){
        const parentNode = this.findNode(this.root, parentValue)
        if(parentNode) parentNode.children.push(new Node(childValue))
            else{
        console.log(`Parent node with value ${parentValue} not found`);
            }
    }
    findNode(node,value){
        if(node.value == value){
            return node
        }
        for(let child of node.children){
            const found = this.findNode(child,value)
            if(found) return found
        }
        return null
    }
    printTree(node = this.root,level = 0 ){
        console.log(" ".repeat(level)+node.value);
        for(let child of node.children){
            this.printTree(child,level +1)
        }
    }
}

const tree = new Tree(100)
tree.addChild(100, 10);     
tree.addChild(100, 20);   
tree.addChild(10, 5);       
tree.addChild(10, 7);       
tree.addChild(20, 15);      
tree.printTree()
