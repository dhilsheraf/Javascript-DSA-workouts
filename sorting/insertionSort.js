function insertionSort(arr){
    let key 
    for(let i = 1 ; i < arr.length ; i++ ){
        key = arr[i]
        let j = i-1

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] =  key
    }
    return arr
}

console.log("Original array : ",[1,2,4,423,234,5,2,342,1,5,32,235])
console.log(insertionSort([1,2,4,423,234,5,2,342,1,5,32,235]))
