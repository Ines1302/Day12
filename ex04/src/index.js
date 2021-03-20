function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  } else {
    function fibb(n) {
      if (n == 0) {
        return 1;
      }
      if (n == 1) {
        return 1;
      }
      return fibb(n - 2) + fibb(n - 1);
    }
    var sum = 0;
    for (var i = 0; fibb(i) <= num; i++) {
      if (fibb(i) % 2 == 1) {
        sum += fibb(i);
      }
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
