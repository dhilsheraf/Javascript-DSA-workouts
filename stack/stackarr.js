class Stack {
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.items.length == 0 ){
            return 'underflow'
        }
        return this.items.pop()
    }

    peek(){
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

}

const stack = new Stack
stack.push('haai bro')
console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.printStack())