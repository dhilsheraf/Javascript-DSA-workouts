class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }
    push(value){
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is underflow")
        return null
        }
        const data = this.top.value
        this.top = this.top.next
        return data ;

    }
    peek(){
        if(this.isEmpty())
            return console.log('Stack is empty')
    return this.top.value
    }
    isEmpty(){
        return this.top == null
    }
}

const stack = new Stack ()

console.log(stack.push('Hello bro'));
