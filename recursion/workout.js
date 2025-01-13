function recursiceFibanocci(n){
    if(n < 2 ){
        return n
    }
    return recursiceFibanocci(n-1) + recursiceFibanocci(n-2)
}

console.log(recursiceFibanocci(6))

function recursiveFactorial(n){
    if(n < 2 ) return n
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(4))

function sumOfNaturalNumbers(n){
    if(n === 0 ) return 0

    return n + sumOfNaturalNumbers(n-1)
}
console.log(sumOfNaturalNumbers(5))

function binarySearch(arr,target, left = 0 , right = arr.length-1){
    if(left > right ) return -1

    let middle = Math.floor((left+right)/2)

    if(arr[middle] == target)return middle

    if(arr[middle] > target) return binarySearch(arr,target,left,mid -1)

    return binarySearch(arr,target,mid+1,right)
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],5))