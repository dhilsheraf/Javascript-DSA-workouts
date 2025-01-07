//search two elements in array, if both present return true, else false

let arr = [1,23,2,42,4,5,6,7,8,7]

function twoval(a,b){
    for(let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] == a ){
            a = true
        }else if (arr[i] == b) b = true
    }
    return a == b;
}

console.log(twoval(50,2))