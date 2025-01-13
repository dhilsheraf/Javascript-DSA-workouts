let arr = [1,2,3,4,5,6,7,8,9]
//single linked list  workouts
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
            arrayValues += curr.value + ' '
            curr = curr.next 
        }
        return console.log(arrayValues)
    }

    reversePrint(){
        let curr = this.head 
        let reverseVal = ''
        while(curr != null){
            reverseVal = curr.value +' '+ reverseVal
            curr =curr.next
        }
        return console.log(reverseVal)
    }

    addAtBeginning(value){
        let node = new Node(value)
        
        node.next = this.head 
        
        this.head = node
    }
    addAtEnd(value){
        let node = new Node(value)
        let current ;
        if(this.head == null ){
            this.head = node
        }else {
            current = this.head 
            while(current.next){
                current = current.next
            }
            current.next = node
        }

    }
    delete(value){
        let curr = this.head 
        let prev = null

        while(curr != null){
            if(curr.value == value){
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
    insertAfterNode(value,addValue){
        let node = new Node(addValue)
        let curr = this.head 
        while(curr !=  null){
            if(curr.value == value){
                
                    node.next = curr.next
                    curr.next = node
                    return
            }
            curr = curr.next
        }
        return console.log("VAlue not found in the list")
    }
    insertBeforeNode(value,inserValue){
        let node = new Node(inserValue)
        let curr = this.head 
        let prev = null
        while(curr != null){
            if(curr.value == value){
                if(prev == null ){
                    node.next = this.head
                    this.head = node
                }else{
                    node.next = curr
                    prev.next = node
                }
                return
            }
            prev = curr
            curr = curr.next
        }
        return console.log("Value not found")
    }
    removeDuplicatesSorted(){
        let curr = this.head

        while(curr != null && curr.next != null ){
            if(curr.next.value == curr.value){
                curr.next = curr.next.next
            }
            curr = curr.next
        }
    }
    middleElement(){
        let fast = this.head
        let slow = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }
        return console.log(slow.value)
    }
    reverse(){
        let curr = this.head 
        let prev = null
        let next = null
        while(curr){
            next = curr.next 
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}

const ll = new LinkedList()
ll.toLinkedList(arr)
ll.print()
ll.addAtBeginning(20)
ll.print()
ll.addAtEnd(999)
ll.print()
ll.delete(5)
ll.print()
ll.insertAfterNode(20,20,100)
ll.print()
ll.insertBeforeNode(2,222)
ll.print()
ll.reversePrint()
ll.print()
ll.removeDuplicatesSorted()
ll.print()
ll.middleElement()
ll.reverse()
ll.print()