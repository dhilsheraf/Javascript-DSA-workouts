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