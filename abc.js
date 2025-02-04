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


function heapify(arr,n,i){
    let largest = i
   let left = i*2 +1
   let right = i*2 +2

   if(left < n && arr[left] > arr[largest]){
      largest = left
   }
   if(right < n && arr[right] > arr[largest]){
    largest = right
   }
   if(i != largest ){
    [arr[i],arr[largest]] = [arr[largest],arr[i]]
    heapify(arr,n,largest)
   }
}


function heapsort(arr){
    let n = arr.length
    for(let i = Math.floor(n/2) - 1;i > 0 ; i-- ){
        heapify(arr,n,i)
    }
    for(let i = n -1  ; i > 0 ; i-- ){
        [arr[i],arr[0]] = [arr[0],arr[i]]
        heapify(arr,i,0)
    }
    return arr
}

let arr = [321,213,124,124,21,4214,21,4,12,421,4221,10]

heapsort(arr)
console.log(arr)
console.log((heapsort(arr)));
