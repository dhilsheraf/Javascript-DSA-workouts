function quickSort(arr){
    if(arr.length < 2 )return arr
        let pivot = arr[arr.length-1]
        let left = []
        let right = []
        
        for(let i = 0 ; i < arr.length -1  ; i++ ){
            if(arr[i] < pivot ) left.push(arr[i])
            else right. push(arr[i])
        }
        return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([1,23,1,41,421,421,-5,10,30]))

//other without recursion

function partition(arr,low,high){
    let pivot = arr[high]

    let i = low -1

    for(let j = low ; j < high -1 ; j++ ){
        if(arr[i] < pivot ){
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            
        }
    }
}