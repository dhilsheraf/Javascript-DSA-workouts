function binarySearch(arr,t){
    let right = arr.length - 1
    let left = 0
    
    while(left <= right){
        let middle = Math.floor((left+right)/2)

        if(t == arr[middle]){
            return middle
        }
        if(target < arr[middle]){
            right = middle - 1
        }else {
            left = middle + 1
        }
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],5))

function smallestgtt(arr,t){
    let right = arr.length -1
    let left = 0 
    let result = -1
    while(left <= right ){
        let middle = Math.floor((right + left )/2)

        if(arr[middle] > t ) {
            result = arr[middle]
            right = middle -1
        }  else{
            left = middle +1 
        }
    }
    return result
}
console.log("haai")
console.log(smallestgtt([1,2,3,4,6,7,8,9],5))

function firstOccurence(arr,t){
    let right = arr.length-1
    let left = 0
    let result = -1
    while(left <= right){
        let middle = Math.floor((right+left)/2)

        if(arr[middle] == t ) {
            result = middle 
            right = middle -1
        } else if( arr[middle] < t){
            left = middle +1 
        }else{
            right = middle -1
        }
    }
    return result

}

console.log(firstOccurence([1,2,3,3,3,4,5,6,7,8,9,10],3))