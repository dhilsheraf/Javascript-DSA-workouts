class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.isEmpty()) return console.log("Queue is empty") 
        
        return this.items.shift()
    }

    peek(){
        if(this.items.length === 0 ) return console.log("the queue is empty")
        return this.items[0]
    }

    isEmpty(){
        return this.items.length == 0 
    }
    size(){
        return this.items.length
    }
}