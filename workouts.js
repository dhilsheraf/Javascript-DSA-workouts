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
        const dat = this.top.value
    this.top = this.top.next
    return data
    }
    isEmpty(){
        return this.top == null
    }
}

function bubbleSort(arr){
    let temp ;
    let swapped
    for(let i = 0 ; i < arr.length-1 ; i++ ){
        for(let j = 0 ; j < arr.length -1-i ; j++){
            if(arr[j] < arr[j+1] ){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

function insertionSort(arr){
    let key ;
    for(let i = 1 ; i < arr.length ; i++ ){
        key = arr[i]
        let j = i-1
        while(j>= 0 && arr[j] > key ){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}

function selectionSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n ; i++ ){
        let min_idx = i 
        for(let j = i+1 ; j < n ; j++ ){
            if(arr[j] < arr[min_idx]){
                min_idx = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }
    return arr
}

function quickSort(arr){
    if(arr.length <2) return arr
    let pivot = arr[arr.length -1]
    let left = []
    let right = []
    for(let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] < pivot) left.push(arr[i])
            else right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}



function mergeSort(arr){
    if(arr.length < 2) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.splice(0,mid)
    let right = arr.splice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    const sorted =[]
    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        }else {
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


class HashTable{
    constructor(size){
        this.items = new Array(size)
            this.size = size
    }

    hash(key){
        let hash = 0;
        for(let i of key ){
            hash += i.charCodeAt(0)
        }
        return hash % this.size
    }
}