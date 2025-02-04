function flatternArray(arr){
    let result = []

    for(let i = 0 ; i < arr.length ; i++ ){
        if(Array.isArray(arr[i])){
            result = result.concat(flatternArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(flatternArray([323,[1,23,4,[23,4,2,20]]]))

//through reduce recursion 
function flatrec(arr){
    return arr.reduce((acc,val)=>{
        return Array.isArray(val) ? acc.concat(flatrec(val)) : acc.concat(val)
    },[])
}

console.log(flatrec([12,31,100,[1,2,[10,20]]]));


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.top = null
    }
    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node.next
    }
    pop(){
        if(this.isEmpty()) return console.log("Stack underflow")
        const dat = this.top.value
    this.top = this.top.next
    return data
    }
    isEmpty(){
        return this.top == null
    }
}

function bubbleSort(arr){
    let temp ;
    let swapped
    for(let i = 0 ; i < arr.length-1 ; i++ ){
        for(let j = 0 ; j < arr.length -1-i ; j++){
            if(arr[j] < arr[j+1] ){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

function insertionSort(arr){
    let key ;
    for(let i = 1 ; i < arr.length ; i++ ){
        key = arr[i]
        let j = i-1
        while(j>= 0 && arr[j] > key ){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}

function selectionSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n ; i++ ){
        let min_idx = i 
        for(let j = i+1 ; j < n ; j++ ){
            if(arr[j] < arr[min_idx]){
                min_idx = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }
    return arr
}

function quickSort(arr){
    if(arr.length <2) return arr
    let pivot = arr[arr.length -1]
    let left = []
    let right = []
    for(let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] < pivot) left.push(arr[i])
            else right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}



function mergeSort(arr){
    if(arr.length < 2) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.splice(0,mid)
    let right = arr.splice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    const sorted =[]
    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        }else {
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


class HashTable{
    constructor(size){
        this.items = new Array(size)
            this.size = size
    }

    hash(key){
        let hash = 0;
        for(let i of key ){
            hash += i.charCodeAt(0)
        }
        return hash % this.size
    }
}


class BinaryNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new BinaryNode(value)

        if(this.root === null ){
             this.root = newNode
             return}
        let queue = [this.root]
        while(queue.length){
            let node = queue.shift()

            if(node.left === null){
                node.left = newNode
                return
            }else{
                queue.push(node.left)
            }
            if(node.right === null ){
                node.right = newNode
                return
            }else{
                queue.push(node.right)
            }

        }     

    }
    preOrder(node){
        if(node === null ) return 
        console.log(node.value);
        this.preOrder(node.left)
        this.preOrder(node.right)    
    }
    inOrder(node){
        if(node === null ) return
        this.inOrder(node.left)
        console.log(node.value);
        this.inOrder(node.right)
        
    }
    postOrder(node){
        if(node === null ) return
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value);
        
    }
}


// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null;

//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         const newNode = new Node(value)

//         if(this.root === null ){
//             this.root = null
//             return
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(node,newNode){
//         if(newNode.value < node.value){
//             if(node.left === null ){
//                 node.left = newNode
//             }else{
//                 this.insertNode(node.left,newNode)
//             }
//         }else{
//             if(node.right === null ){
//                 node.right = newNode
//             }else{
//                 this.insertNode(node.right,newNode)
//             }
//         }
//     }
//     preOrderTraversal(root){
//         if(root){
//             console.log(root.value);
//             this.preOrderTraversal(root.left)
//             this.preOrderTraversal(root.right)
//         }
//     }
//     inOrderTraversal(root){
//         if(root){
//             this.preOrderTraversal(root.left)
//             console.log(root.value);
//             this.preOrderTraversal(root.right)
//         }
//     }
//     pastOrderTraversal(root){
//         if(root){
//             this.preOrderTraversal(root.left)
//             this.preOrderTraversal(root.right)
//             console.log(root.value);
//         }
//     }
//     levelOrder(){
//         if(this.root === null ) return []
//         let queue = [this.root]
//         const result = []
//         while(queue.length){
//             const node = queue.shift()
//             result.push(node.value)
//             if(node.left !== null ) queue.push(node.left)
//             if(node.right !== null ) queue.push(node.right)
//         }
//     return result
//     }
//     findClosest(root,target){
//         let closest = root.value

//         while(root !== null ){
//             if(Math.abs(root.value - target) < Math.abs(closest-target))
//                 closest = root.value
//             if(target < root.value ){
//                 root = root.left
//             }else if(target > root.value ){
//                 root = root.right
//             }else{
//                 break;
//             }
//         }
//         return closest
//     }
//     checkBST(root, min = -Infinity,max = Infinity){
//         if(root === null ) return true
//         if(root.value <= min || root.value >= max ) return 

//         return (
//             this.checkBST(root.left,min,root.value) && this.checkBST(root.right,root.value,max)
//         )
//     }
// }


class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node =this.root
        for(let i of word){
            if(!node.children[i]){
                node.children[i] = new TrieNode()
            }
            node = node.children[i]
        }
        node.isEndOfWord  = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return node.isEndOFWord
    }
}

const trie = new Trie()
trie.insert("Hellooo")
console.log(trie.root);
console.log(trie.search("hel"));
