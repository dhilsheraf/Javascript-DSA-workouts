// function insertionSort(arr){
//     let key 
//     for(let i = 1 ; i < arr.length ; i++ ){
//         key = arr[i]
//         let j = i-1

//         while(j >= 0 && arr[j] > key){
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j+1] =  key
//     }
//     return arr
// }

console.log("Original array : ",[1,2,4,423,234,5,2,342,1,5,32,235])
console.log(insertionSort([1,2,4,423,234,5,2,342,1,5,32,235]))

function insertionSort(arr){
    let key 
    for(let i = 1 ; i < arr.length ; i++ ){
        key = arr[i]
        let j = i-1
        while( j >= 0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

function findKthSmallest(arr, k) {
    insertionSort(arr);
    return arr[k - 1];  // Kth smallest element (0-indexed, so we use k-1)
}

// const arr = [7, 10, 4, 3, 20, 15];
// const k = 4;
// console.log(findKthSmallest(arr, k));  // Output: 10


function countInversions(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
            count++;  // Each shift is an inversion
        }
        arr[j + 1] = key;
    }
    return count;
}

// const arr = [1, 20, 6, 4, 5];
// console.log(countInversions(arr));  // Output: 5


function insertionSortStrings(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const arr = ["apple", "orange", "banana", "mango", "pear"];
console.log(insertionSortStrings(arr));  // Output: ["apple", "banana", "mango", "orange", "pear"]
