class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    isEmpty(){
        return this.items.length === 0
    }
    dequeue(){
        if(this.isEmpty()) return "Queue is empty"
        this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    size(){
        return this.items.length
    }
    print(){
        return this.items.join(" ")
    }

}

const queue = new Queue()
queue.enqueue(100)
queue.enqueue(999)
queue.enqueue(555)
queue.dequeue()
console.log(queue.peek());

