function mergeSort(arr){
    if(arr.length < 2 ) return arr
    const mid = Math.floor(arr.length /2 )
    const leftarr = arr.slice(0,mid)
    const rightarr = arr.slice(mid)
    
    return merge(mergeSort(leftarr),mergeSort(rightarr))
}

function merge(leftarr,rightarr){
    const sortedArr = []
    while(leftarr.length && rightarr.length){
        if(leftarr[0] <= rightarr[0]){
            sortedArr.push(leftarr.shift())

        }else {
            sortedArr.push(rightarr.shift())
        }
    }

   return [...sortedArr,...leftarr, ...rightarr]
}

const arr = [8,20,-2,4,-6]
console.log(mergeSort(arr))