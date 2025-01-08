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