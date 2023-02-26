/*
* Write a function countBs that takes a string as
its only argument and returns a number
that indicates how many uppercase "B" characters
are in the string.
*/

/*
function countBs(letter) {
  if ("B"[letter] == "B") {
    return String.length;
  } else {
    return letter;
  }
}

countBs("BaBa");

*/

/*
function g(a, b) {
  return a * b;
}

console.log(g(2, 2));
*/

/*
function countBs(n) {
  if ("string"[n] == "B") {
    return string.length;
  }
}

console.log(countBs("Baba"));
//undefined
*/

/*
function countBs(string) {
  return string.length;
}

console.log(countBs("Amani"));
*/

/*
function countBs(letter) {
  return letter.length;
}

console.log(countBs("Ama"));
*/

/*
function countBs(string) {
  return "string"[N];
}

console.log(countBs("Bob"));
*/

//Solution
/*
function countBs(string) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      counted += 1;
    }
  }
  return counted;
}

console.log(countBs("BaBa and Bame with Bebe"));
*/

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("Amani ZihA KAn", "A"));
