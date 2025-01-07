let arr = [1,2,3,4,5,6,7,8,9]

class Node {
    constructor(value){
        this.value = value
        this.next = null
        
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    toLinkedList(arr){
        
        for(let i = 0 ; i< arr.length ; i++){
            let node = new Node(arr[i])
            if(this.head == null) {
                this.head = node
            }else {
                let current = this.head 
                while(current.next !== null ){
                    current = current.next

                }
                current.next = node
            }
        }
    }
    print(){
        let curr = this.head
        let arrayValues = ''
        while(curr){
            arrayValues += curr.value
            curr = curr.next 
        }
        return console.log(arrayValues)
    }
}

const ll = new LinkedList()
ll.toLinkedList(arr)
ll.print()