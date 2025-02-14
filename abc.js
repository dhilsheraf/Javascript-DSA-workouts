// class BinaryNode{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         let newNode = new BinaryNode(value)
//         if(this.root === null ) this.root = newNode
//         else this.insertNode(this.root,newNode)
//     }
//     insertNode(node,newNode){
//         if(newNode.value < node.value){
//             if(node.left === null ) node.left = newNode
//             else{
//                 this.insertNode(node.left,newNode)
//             }
//         }
//         else{
//             if(node.right == null ) node.right = newNode
//             else{
//                 this.insertNode(node.right,newNode)
//             }
//         }
//     }
//     kthvalue(k){
//         let root = this.root
//         let arr = []
//         while(root){
//             arr.push(root.left.value)
//             root = root.left
//         }
//         console.log(arr)
//         return arr[k-1]
//     }
//     preorderTraversal(node){
//         if(node === null ) return
//         console.log(node.value);
//         this.preorderTraversal(node.left)
//         this.preorderTraversal(node.right)
//     }
// }

// const bst = new BinaryTree()

// bst.insert(10)
// bst.insert(15)
// bst.insert(20)
// bst.preorderTraversal(bst.root)
// console.log(bst.kthvalue(2))


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }
//     insert(word){
//         for(let char of word){
//             if(!this.root.children[char]){
//                 this.root.children[char]  = new TrieNode()            }
//         }
//         this.root.isEndOfWord = true
//     }
//     prefix(word){
//         if()
//     }
//     prefixSuggest(){

//     }

// }


// const trei = new Trie()
// trei.insert("hello")
// console.log(trei.root.children)


// function heapify(arr,n,i){
//     let largest = i
//    let left = i*2 +1
//    let right = i*2 +2

//    if(left < n && arr[left] > arr[largest]){
//       largest = left
//    }
//    if(right < n && arr[right] > arr[largest]){
//     largest = right
//    }
//    if(i != largest ){
//     [arr[i],arr[largest]] = [arr[largest],arr[i]]
//     heapify(arr,n,largest)
//    }
// }


// function heapsort(arr){
//     let n = arr.length
//     for(let i = Math.floor(n/2) - 1;i > 0 ; i-- ){
//         heapify(arr,n,i)
//     }
//     for(let i = n -1  ; i > 0 ; i-- ){
//         [arr[i],arr[0]] = [arr[0],arr[i]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

// let arr = [321,213,124,124,21,4214,21,4,12,421,4221,10]

// heapsort(arr)
// console.log(arr)
// console.log((heapsort(arr)));

class Node{
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
            this.insertNode(this.root,newNode)
        } 
    }
    insertNode(node,newNode){
        if(newNode.value < node.value){
            if(node.left === null ){
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null ){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    min(node){
        if(!node.left)
            return node.value
        else
        return this.min(node.left)
    }
    max(node){
        if(!node.right){
            return node.value
        }else{
            return this.max(node.right)
        }   
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null ) return root
        if(value < root.value ){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right ){
                return null
            }
            if(!root.left)
                return root.right
            if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
    }
    preOrderTraversal(node){
        if(node === null) return 
        console.log(node.value);
        this.preOrderTraversal(node.left)
        this.preOrderTraversal(node.right)
    }
    inOrderTraversal(node){
        if(node === null ) return 

        this.inOrderTraversal(node.left)
        console.log(node.value);
        this.inOrderTraversal(node.right)
    }
    postOrdertraversal(node){
        if(node === null ) return

        this.postOrdertraversal(node.left)
        this.postOrdertraversal(node.right)
        console.log(node.value)
    }
    levelOrderTraversal(){
        if(!this.root) return
        let queue = [this.root]
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    }

}

const bst  = new BinarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(29)
bst.insert(8)
bst.insert(9)
bst.insert(5)
bst.insert(7)
console.log("Inorder traversal");
bst.inOrderTraversal(bst.root)
console.log("Post order traversal");
bst.postOrdertraversal(bst.root)
console.log("Pre order traversal");
bst.preOrderTraversal(bst.root)
console.log("Level order traversal");
bst.levelOrderTraversal()


function heapify(arr,n,i){
    let left = 2*i+1
    let right = 2*i+2
    let largest = i
    if(left < n && arr[left] > arr[largest])
        largest = left
    if(right < n && arr[right] > arr[largest])
        largest = right
    if(largest !== i ){
    [arr[i],arr[largest]] = [arr[largest],arr[i]]
    heapify(arr,n,largest)}
}

function heapsort(arr){
    let n = arr.length
    for(let i = Math.floor(n/2) -1  ; i >= 0 ; i-- ){
        heapify(arr,n,i)
        console.log(arr)
    }
    for(let i = n-1 ; i > 0 ; i--){
        console.log(arr);
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

console.log(heapsort([1,99,78,98,45,78,9,60]))