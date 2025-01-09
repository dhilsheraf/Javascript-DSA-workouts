function flOccur(arr,t){
    let f = -1
    let l = -1
    for(let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] == t ){
            if(f === -1 )  f = i
             l = i 
        }
    }
    return {first:f,last:l}
}

console.log(flOccur([1,2,3,4,5,6,7,3,2,1],1))

function largeElement(arr){
    let max = arr[0]
    for(let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] > max ) max = arr[i]
    }
    return max
}

console.log(largeElement([1,2,3,4,21,6,20,23,21,89]))

function count(arr,t){
    let count = 0 ;
     for(let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] == t ){
            count++
        }

     }
     return count
}

console.log(count([1,2,3,4,21,321,4,21,321,4,2,3,2,2,6],2))