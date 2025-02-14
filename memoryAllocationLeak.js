//this is example and workouts of memory allocation and memory leak with example


//Variables declared without let, const, or var are attached to the global object (window in browsers).

function createLeak() {
    leakedVar = "I'm a leak!"; // Implicit global variable
}
createLeak();


//Forgotten Timers or Callbacks
//setInterval or setTimeout keeps a reference to its callback, which can prevent associated objects from being garbage collected.

function startTimer() {
    setInterval(() => console.log("Still running"), 1000);
}
startTimer(); // Timer runs forever unless explicitly cleared







class TrieNode {
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
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }
    searchPrefix(prefix){
        let node = this.root 
        for(let char of prefix){
            if(!node.children[char]) return []
            node = node.children[char]
        }
        return this.collectWord(node,prefix)
    }
    collectWord(node,prefix){
         let words = []
         if(node.isEndOfWord) words.push(prefix)
         for(let char in node.children){
             words = words.concat(this.collectWord(node.children[char],prefix+char))
         }
         return words
    }
    
}

const trie = new Trie()
trie.insert("Hallo")
trie.insert("Hai")
trie.insert("Haaa")
trie.insert("gggg")
trie.insert("Hbc")

console.log(trie.searchPrefix("Hai"))


class BinaryNode{
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
        const newNode = new BinaryNode(value)
        if(this.root === null ) this.root = newNode
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(newNode.value < node.value){
        if(node.left === null) {
            node.left === newNode
        }else{
            this.insertNode(node.left,newNode)
        }
        }
        else{
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    inOrder(node){
        if(node === null ) return
        
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }
}

const br = new BinarySearchTree()

br.insert(10)
br.insert(15)
br.insert(11)
br.insert(8)
br.insert(6)
br.insert(5)
br.inOrder(br.root)

class Graph{
    constructor(){
        this.adjacencylist = {}
    }
    addvertex(vertex){
        if(!this.adjacencylist[vertex])
        this.adjacencylist[vertex] = new Set()
    }
    isCyclic(){
        let visited = new Set()
        
        let dfs = (node,parent) => {
            visited.add(node)
            for(let neighbour of this.adjacencylist[node]){
                if(!visited.has(neighbour)) 
                    if(dfs(neighbour,node)) return true
                else if(neighbour !== parent){
                    return true
                }
            }
            return false
        }
        for(let vertex in this.adjacencylist){
            if(!visited.has(vertex)){
                if(dfs(vertex,null)) return true
            }
        }
        return false
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }
}

const graph = new Graph()
graph.addvertex(5)
graph.addvertex(10)
graph.addvertex(15)
graph.addEdge(5,10)
graph.addEdge(5,15)
graph.addvertex()

console.log(graph.isCyclic())
