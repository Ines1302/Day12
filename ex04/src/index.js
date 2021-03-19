

function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  } else { 
    
    var num1 = 1;
    var num2 = 1;
    var sum = 1;
    while (num2 <= num) {
      if (num2 % 2 !== 0) {
        sum = sum + num2;
      }
      num2 = num2 + num1;
      num1 = num2 - num1;
    }
  
    return sum;
  }
      
  }



console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
