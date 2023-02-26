//Exercices on chap-3 ELJs
/*
Write a function min that takes two
arguments and returns their minum.
 */
/*
Math.min returns the smallest argument.
*/
/*
console.log(min(16, 4));

function min(num1, num2) {
  return Math.min(num1, num2);
}

*/

//solution
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, -10));
