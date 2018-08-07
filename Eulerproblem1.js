/*
Euler Project : Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

let numbers = [];

const cnt = 1000;

// Add to array if divisable by 3 or 5
for(i=1; i<cnt; i++){
  if(i % 3 === 0 || i % 5 === 0) {
    numbers.push(i);
  }
}

// Sum all the values in the array
// This will be the sum of all the values divisable by 3 or 5
let sum = 0;
for(j=0; j<numbers.length; j++) {
  sum += numbers[j];
}

console.log(sum);
// 233168