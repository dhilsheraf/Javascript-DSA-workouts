function bubbleSort(arr){
    let temp ;
    let swapped ;
    for(let i = 0 ; i < arr.length -1 ; i++ ){
        swapped = false
        for(let j = 0 ; j < arr.length -1 -i ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(swapped == false){ 
            return arr
        }
    }
    return arr
}

// let a = bubbleSort([1,24,5,6,7,29,10])
// console.log(a)

function bubbleSortSwapCount(arr){
    let temp 
    let swap = 0 
    let swapped
    for(let i = 0 ; i < arr.length -1; i++ ){
        swapped = false
        for(let j = 0 ; j < arr.length-i-1 ; j++ ){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
                swap++
            }
        }
        if(swapped === false ) return swap
    }
    return swap
}

// console.log(bubbleSortSwapCount([4,3,2,1]))

function descendOrderBubbleSort(arr){
    let temp 
    let swapped
    for(let i = 0 ; i < arr.length -1 ; i++ ){
        for(let j = 0 ; j < arr.length -i -1 ; j++){
            if(arr[j] < arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(swapped === false ) return arr
    }
    return arr
}


console.log(descendOrderBubbleSort([4,1,23,4,5,6]));
