//mathematical algorithms for learn basic
function fibonacci(n){
    let arr = [0,1]
    for(let i = 2 ; i < n ; i++){
         arr[i] = arr[i-1] + arr[i-2]
    }
    return arr
}

const val = fibonacci(1);
// console.log(val)

// Big-O = o(n)

//factorila of a number 

function factorial(n){
    let result = 1
    for(let i = 1 ; i <= n ; i++){
        result = result*i
    }
    return result
}
// console.log(factorial(5))

// prime number 

function isPrime(n){
    if(n<2) return false
    for(let i = 2 ; i <= Math.sqrt(n) ; i++ ){
        if(n % i == 0) return false
    }
    return true
}
console.log(isPrime(1));
console.log(isPrime(10));
console.log(isPrime(5));


