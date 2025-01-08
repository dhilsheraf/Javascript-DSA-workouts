//doubly linked list javascript

//doubly node
class Node {
        // constructor to create a new node
        //next and prev is set by default initialized as null
    constructor(val){
        //to stor the value
        this.data = val
        // to link the next node
        this.next = null
        //to link the previous node
        this.prev = null
    }
}


class DoublyLinkedList {
    //constructor to create a new linked list
    constructor() {
        //to contain the first item of the list
        this.head = null
        // to contain the last item of the list
        this.tail = null
    }

    isEmpty(){
        if(this.head == null) return true
        return false
    }

    addItem(value){
        let temp = new Node(value)

        if(this.head == null){
            this.head = temp
            this.tail = temp
        }
        else {
            this.tail.next = temp
            this.tail = this.tail.next
        }
    }
    display(){
        if(!this.isEmpty() ){
            let curr = this.head
            while( curr !== null){
                console.log(curr.data)
                curr = curr.next
            }
        }
    }
   

}

const dll = new DoublyLinkedList();

console.log(dll.isEmpty())
dll.addItem(100);
dll.display()