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
/*
let descriptions = {
  works: "Went to work",
  'touched tree': "Touched a tree"
};
console.log(descriptions.['touched tree']);
NEED MORE CORECTION
*/

/**
 * THe delete operator is a unary operator when applied to an object property
 * will remove the name property from the object.
 * The binary 'in' operator, when applied to a string and an object, tells you
 * whether an object has that property with that name.
 *
 * The difference between setting a property to undefined and actually deleting is that
 * in the 1st case, the object still has the property(it's just doesn't have a an interinsting
 * value);
 * IN the 2nd case the property is no longer present and in will return false.
 */
/*
let anObject = {
  left: 1,
  right: 2,
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);
*/

/**
 * Object.keys used to find out what properties an object has.
 * Give it an object and it will return an array of string.
 */
/*
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
*/

/**
 * Object.assign function copies all properties from one object to another.
 */
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
