/*
 * FizzBuzz
 * Write a program that uses console.log to print all numbers
 * from 1 t0 100, with two exceptions.
 * For number divisible by 3,print 'Fizz'
 * instead of number.
 * and for the numbers divisible by five
 *  print 'Buzz' instead.
 *
 * Modify the program to print 'FizzBuzz' for numbers that are both
 * divisible by 3 and 5 (and still printing 'Fizz' or 'Buzz' for number
 * for number that are only divisible by one of those)
 */
let number = 1;
while (number <= 100) {
  if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log("FizzBuzz");
  }
  number += 1;
}
