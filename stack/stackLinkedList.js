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
    printStack(){
        let curr = this.top
        let result = []

        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        return result
    }
}

// const stack = new Stack ()
// console.log(stack.peek())
// console.log(stack.printStack());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.printStack());
function reverseStack(str){
    const stack = new Stack()
    for(let i of str){
        stack.push(i)
    }
    let reverseStr = ""
    while(!stack.isEmpty()){
        reverseStr += stack.pop()
    }
    return reverseStr
}
console.log(reverseStack("Hello Word"))


