


function heapify(arr,n,i){

    let smallest = i
    let left = i*2+1
    let right = i*2+2
    if(left < n && arr[left] > arr[smallest]){
        smallest = left
    }
    if(right < n && arr[right] > arr[smallest]){
        smallest = right
    }
    if(smallest !== i){
        [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
        heapify(arr,n,smallest)
    }
}



function heapSort(arr){
    let n = arr.length
    for(let i = Math.floor((n/2)-1); i >= 0 ;i--){
        heapify(arr,n,i)

    }
    for(let i = n-1 ; i> 0 ; i-- ){
        
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

console.log(heapSort([12,3,2,4,21,412,521,]))