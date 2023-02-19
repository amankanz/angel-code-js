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
 * divisible by 3 and 5 (and still printing 'Fizz' or 'Buzz'
 * for number that are only divisible by one of those)
 */
for (let num = 1; num <= 100; num += 1) {
  let output = "";
  if (num % 3 == 0) output += "Fizz";
  if (num % 5 == 0) output += "Buzz";
  console.log(output || num);
}
