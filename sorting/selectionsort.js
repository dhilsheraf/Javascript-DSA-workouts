function selectionSort(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }
    return arr
}

console.log(selectionSort([3,4,2,5,1,51,3,51,1,100]))

function selectionSortString(arr){
    for(let i = 0 ; i<arr.length-1 ; i++ ){
        min_idx = i 
        for(let j = i+1 ; j < arr.length ; j++  ){
            if(arr[j] < arr[min_idx])
                min_idx = j
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }
    return arr
}

console.log(selectionSortString(["hai","HEllo","a","b"]))


function selectionSortK(arr , k) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }
    return arr[k-1]
}
console.log(selectionSortK([1,2,3,4,2,41,421,421,50],4))