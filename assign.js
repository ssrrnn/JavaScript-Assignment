let checkPrime = (number) =>{
    if(number == 1) return false
    for (let index = 2; index < number; index++) {
        if(number % index == 0){
            return false
        }
        
    }
    return true
}

let fibonacci = (n) =>{
    let firstNumber = 0
    let secondNumber = 1
    let sum = 0
    
    for (let index = 1; index <= n; index++) {
        console.log(firstNumber)
        sum =  firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = sum
        
    }
}

let countOf = (num) =>{
    let countZero =0
    let countEven =0
    let countOdd =0
    for (let index = 0; index < num.length; index++) {
        if(num[index] == 0){
            countZero++
        }
        else if(num[index] %2 == 0){
            countEven++
        }
        else{
            countOdd++
        } 
    }
    return ['Count of Even:'  ,countEven, "Count of Odd: ", countOdd, "Count of Zero: ", countZero]
    
}
//console.log(checkPrime(21))
//fibonacci(10)
//console.log(countOf([0,0,1,2,3,4,5,6,7,8,9]))