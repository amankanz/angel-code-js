/*
Recursion
Define a recursive function isEven corresponding to this
description:
zero is even, one is odd and for any other number N;
its evenness is the same as N-2.

THe fuction should accept a single parameter
(a positive, whole integer) and return a boolean
*/
/*
function isEven(number) {
  if (number % 2 == 0) {
    return "true";
  } else if (number % 2 !== 0) {
    return "false";
  } else return number - 2;
}

console.log(isEven(-1));
*/

//Solution
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(-1));
