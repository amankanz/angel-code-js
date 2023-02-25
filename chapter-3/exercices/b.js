/*
Recursion
Define a recursive function isEven corresponding to this
description:
zero is odd, one is odd and for any other number N;
its evenness is hte same as N-2.

THe fuction should accept a single parameter
(a positive, whole integer) and return a boolean
*/
function isEven(number) {
  if (number % 2 == 0) {
    return "true";
  } else if (number % 2 !== 0) {
    return "false";
  }
}

isEven(13);
