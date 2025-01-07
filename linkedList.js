//singly linked list js

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
       return this.size === 0
    }
    getSize(){
        return this.size
    }
    //add an element at the end of the list
    add(value){
        let node = new Node (value)
        let current ;
        if(this.head == null){
            this.head = node
        }else{
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.size ++

    }
    print(){
        if(this.isEmpty()) console.log("The list is empty ?")
        else{
           let curr = this.head
           let listValues = ''
           while(curr){
            listValues += `${curr.value} `
            curr = curr.next
           }
           console.log(listValues)
        }
    }
    // insert element at the position of the index
    insertAt(value,index){
        if(index < 0 || index > this.size){
            return console.log("Please enter a valid index")
        } else {
            let node = new Node(value);
            let curr,prev

            curr = this.head
            if(index == 0){
                node.next = this.head
                this.head = node
            } else {
                curr = this.head
                let it = 0

                while (it < index){
                    it++;
                    prev = curr
                    curr = curr.next
                }
                node.next = curr
                prev.next = node;

            }this.size++
        }
    }

    removeFrom(index){
        if( index < 0 || index >= this.size )
            return console.log("Please enter a valid index")
        else {
            let curr , prev ,it = 0

            curr = this.head ; 
            prev = curr

            if(index == 0 ){
                this.head = curr.next
            }
            else {
                while( it < index ){
                    it++;
                    prev = curr
                    curr = curr.next
                }
                prev.next = curr.next
            }
            this.size--;
            return curr.value
        }
    }

    removeValue(value){
        let curr = this.head;
        let prev = null;

        while (curr != null){
            if(curr.value == value ){
                if(prev == null ){
                    this.head = curr.next
                }else {
                    prev.next = curr.next
                }
                this.size--
                return this.value
            }
            prev = curr
            curr = curr.next
        }
        return -1
    }
    indexOf(value){
        let count = 0;
        let curr = this.head

        while(curr != null){
            if(curr.value === value){
                return console.log(count);
            }
            count++;
            curr = curr.next
        }
        return -1
    }
}

const list = new LinkedList()

console.log(list.isEmpty())
list.add(10)
list.print()
list.insertAt(100,0);
list.print()
list.removeFrom(1);
list.print()
list.add(1)
list.removeValue(100)
list.add(10)
list.print()
list.indexOf(1)
