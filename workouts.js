function flatternArray(arr){
    let result = []

    for(let i = 0 ; i < arr.length ; i++ ){
        if(Array.isArray(arr[i])){
            result = result.concat(flatternArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(flatternArray([323,[1,23,4,[23,4,2,20]]]))

//through reduce recursion 
function flatrec(arr){
    return arr.reduce((acc,val)=>{
        return Array.isArray(val) ? acc.concat(flatrec(val)) : acc.concat(val)
    },[])
}

console.log(flatrec([12,31,100,[1,2,[10,20]]]));


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.top = null
    }
    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node.next
    }
    pop(){
        if(this.isEmpty()) return console.log("Stack underflow")
        const data = this.top.value
    this.top = this.top.next
    return data
    }
    isEmpty(){
        return this.top == null
    }
}