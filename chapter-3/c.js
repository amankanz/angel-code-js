//The call stack
/*
The following code illustrates recursion by asking a computer
a question that causes an infinity back and forth between
two functions.

*/
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + "came first.");
