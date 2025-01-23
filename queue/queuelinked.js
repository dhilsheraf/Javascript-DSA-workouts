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


const queue = new LinkedListQueue()
queue.enqueue(5000)
queue.enqueue(10000)
console.log(queue.peek())


//queue using stack
class Queue {
    constructor() {
        this.stack1 = []; // For enqueue operations
        this.stack2 = []; // For dequeue operations
    }

    enqueue(value) {
        this.stack1.push(value); // Push into stack1
    }

    dequeue() {
        if (this.stack2.length === 0) { 
            // Transfer elements from stack1 to stack2 if stack2 is empty
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        if (this.stack2.length === 0) { // Check if both stacks are empty
            throw new Error("Queue is empty");
        }
        return this.stack2.pop(); // Pop from stack2
    }

    peek() {
        if (this.stack2.length === 0) {
            // Transfer elements from stack1 to stack2 if stack2 is empty
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        if (this.stack2.length === 0) {
            throw new Error("Queue is empty");
        }
        return this.stack2[this.stack2.length - 1]; // Front element of the queue
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example Usage
const queuestack = new Queue();
queuestack.enqueue(600);
queuestack.enqueue(500);
console.log(queuestack.isEmpty()); // Output: false
console.log(queuestack.dequeue()); // Output: 600
console.log(queuestack.peek());    // Output: 500
console.log(queuestack.isEmpty()); // Output: false

//stack using queue