// Data Structure: Objects and arrays
//Objects
/**
 * Values of the type objects are collections
 * of properties.
 * One to create ojects is by using braces as an expression
 *
 */

/**
 * Inside the braces, there is a list of properties
 * separated by commas.
 * Each prperty has a name followed by a colon and a value.
 */
/*
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
*/

/**
 * Properties whose names aren't valid binding names
 * or valid numbers have to be quoted.
 */
let descriptions = {
  works: "Went to work",
  "touched tree": "Touched a tree",
};
console.log(descriptions.['touched tree']);
