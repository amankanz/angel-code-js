/*
 * ChessBoard
 *
 * Write a program a string that represent a 8x8 grid,
 * using new-line character to separate lines.
 */

for (let line = 0; line < 9; line += 1) {
  for (let lineboard = "#"; ; lineboard += "#") {
    if (lineboard.length == 8) {
      console.log(lineboard);
      break;
    }
  }
}
