class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null
    }

    toLinkedList(arr){
        for(let i = 0 ; i < arr.length ; i++ ){
                let node = new Node(arr[i])
            if(this.head == null){
                this.head = node
                this.head.next = this.head
            }else{
                let curr = this.head
                while(curr.next != this.head ){
                    curr = curr.next
                }
                curr.next = node
                node.next = this.head
            }

        }
    }
    print(){
        if(!this.head){
            return console.log("The list is empty ")
        }
        let curr = this.head 
        let value = ''
        do{
            value += curr.value + ' '
            curr = curr.next
        }while(curr != this.head)
        return console.log(value)
    }

}

console.log("haaai")

let cll = new CircularLinkedList()

cll.toLinkedList([1,2,3,4,56,7])
cll.print()
