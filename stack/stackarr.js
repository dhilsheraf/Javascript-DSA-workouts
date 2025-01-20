class Stack {
    constructor(){
        this.items = []
        this.maxstack  = []
    }
    push(value){
        this.items.push(value)
        if(this.maxstack.length === 0  ||value >= this.maxstack[this.maxstack.length -1]) this.maxstack.push(value)
    }
    pop(){
        if(this.items.length == 0 ){
            return 'underflow'
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()) return "Stack is empty"
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length == 0 ;
    }
    printStack(){
        let str = ""
        for(let i = 0 ; i < this.items.length ; i++){
            str += this.items[i]+" "
        }
        return str
    }
    size(){
       return this.items.length
    }

}
// stack.push('haai bro')
// console.log(stack.isEmpty())
// console.log(stack.peek())
// console.log(stack.printStack())

function middleElement(stack){
    const n = stack.size()

    function removeMidde(stack,currIndex){
        if(currIndex === Math.floor(n/2)){ 
            stack.pop()
            return
        }
            const temp = stack.pop()

            removeMidde(stack,currIndex+1)

            stack.push(temp)
    }
    removeMidde(stack,0)
}
const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.items);

console.log(middleElement(stack))
console.log(stack.items);

