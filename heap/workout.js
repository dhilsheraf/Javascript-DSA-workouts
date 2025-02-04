class MinHeap{
    constructor(){
        this.heap = []
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index){
        let parentIndex = this.parentIndex(index)
        while(index > 0 && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index,parentIndex)
            index = parentIndex
            parentIndex = this.parentIndex(index)
        }
    }
    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftIndex(index){
        return index * 2 +1
    }
    rightIndex(index){
        return index * 2 +2
    }
    remove(){
        if(this.heap.length == 0) return null
        if(this.heap.length === 1 ) return this.heap.pop()
        
            const min = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapifyDown(0)
            return min
    }
    heapifyDown(index){
        let smallest = index

        const right = this.rightIndex(index)
        const left = this.leftIndex(index)

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right
        }
        if(smallest !== index ){
            this.swap(index,smallest)
            this.heapifyDown(smallest)
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    print(){
        console.log(this.heap)
    }

}

const heapn = new MinHeap()

heapn.insert(10)
heapn.insert(14)
heapn.insert(9)
heapn.insert(7)
heapn.print()
console.log(heapn.remove())
heapn.print()

class MaxHeap{
    constructor(){
        this.heap = []
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parentIndex = this.parentIndex(index)
        while(index > 0 && this.heap[index] > this.heap[parentIndex]){
            this.swap(index,parentIndex)
            index = parentIndex
            parentIndex = this.parentIndex(index)
        }
    }
    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftIndex(index){
        return index *2 +1
    }
    rightIndex(index){
        return index *2 + 2
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    remove(){
        if(this.heap.length === 0 ) return null
        if(this.heap.length === 1 ) return this.heap.pop()
        
            const max = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapifyDown(0)
            return max
    }
    heapifyDown(index){
        let largest = index
        const left = this.leftIndex(index)
        const right = this.rightIndex(index)

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right
        }
        if(largest !== index ){
            this.swap(index,largest)
            this.heapifyDown(largest)
        }
    }
    print(){
        console.log(this.heap)
    }

}

const heapx = new MaxHeap()
console.log("Max heap contents");
heapx.insert(10)
heapx.insert(15)
heapx.insert(9)
heapx.insert(7)
heapx.insert(18)
heapx.insert(17)

heapx.print()
console.log(heapx.remove())
heapx.print()

//
console.log("Here we go toooo heapsort");

function heapify(arr,n,i){
    let largest = i
    let right = i *2 +2
    let left = i * 2 +1

    if(left < n && arr[left] > arr[largest] ){
        largest = left
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right
    }
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
 for(let i = n-1 ; i > 0 ; i-- ){
    [arr[0],arr[i]] = [arr[i],arr[0]]
    heapify(arr,i,0)
 }

 return arr

}

console.log(heapsort([2,3,41,32,1,21,321,10]))