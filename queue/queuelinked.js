class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedListQueue{
    constructor(){
        this.size = 0
        this.front = null
        this.rear = null
    }
    isEmpty(){
        return this.size === 0
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.front = this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("The queue is empty")
            return null
        }
        const dequeuedValue = this.front.value
        this.front = this.front.next
        if(this.front === null ){
            this.rear = null
        }
        this.size--
        return dequeuedValue
    }
    peek(){
        if(this.isEmpty()){
            return console.log("The queue is empty")
        }
        return this.front.value
    }
    getSize(){
        return this.size
    }
}