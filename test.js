class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = new Set()
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])
            this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2])
            this.addVertex(vertex2)
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)
            && this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex , '->' + [...this.adjacencyList[vertex]] );
            
        }
    }
    
}

const graph = new Graph()


graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)
graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(5,2)
graph.addEdge(4,5)

graph.display()

function heapify(arr,n,i){
    let largest = i
    let left = i * 2 +1
    let right = i * 2 + 2
    if(left < n && arr[left] > arr[largest])
        largest = left
    if(right < n && arr[right] > arr[largest] )
        largest = right
    if(largest !== i ){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]
        heapify(arr,n,largest)
    }
}

function heapsort(arr){
    let n = arr.length

    for(let i = Math.floor(n/2)-1 ; i >= 0 ; i-- ){
        heapify(arr,n,i)
    }
    for(let i = n-1 ; i >= 0 ; i-- ){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

console.log(heapsort([1,10,5,1,2,8,5,2,4,11,2,414,124,1231,321]))

class Trienode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}


class Trie{
    constructor(){
        this.root = new Trienode()
    }
    insert(word){
        let node = this.root
        for(let char of word ){
            if(!node.children[char])
                node.children[char] = new Trienode()
            node = node.children[char]
        }
        node.isEndOfWord = true
    
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char])
                return false
            node = node.children[char]
        }
        return node.isEndOfWord
    }
    searchPrefix(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char])
                return []
            node = node.children[char]
        }
        return this.getWords(node,prefix)
    }
    getWords(node,prefix){
        let words = []
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.children){
            words = words.concat(this.getWords(node.children[char],prefix+char))
        }
        return words
    }
}

console.log("trieeeeee look at this");


let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");
trie.insert("bat");


console.log(trie.searchPrefix("a"))
console.log(trie.searchPrefix("b"));
