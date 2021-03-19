function myCounter(n) {
  if (n < 1) {
    return [];
  } else {
    const myCountArray = myCounter(n - 1);
    myCountArray.unshift(n);
    return myCountArray;
  }
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;
