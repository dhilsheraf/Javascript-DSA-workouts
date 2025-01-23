class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
}



function strpali(stack){
    let value = 'hello'
    let str = ""
    for(let i of value ){
        stack.push(i)
    }
    for(let i = 0 ; i < value.length  ; i++ ){
        str += stack.pop()
    }
    return value === str
}


const stack = new Stack()

console.log(strpali(stack))