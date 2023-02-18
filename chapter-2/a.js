/*
 * Finds the first number
 * that is both greater than or equal to
 * 20 and divisible by 7
 */
for (x = 20; ; x = x + 1) {
  if (x % 7 == 0) {
    console.log(x);
    break;
  }
}
