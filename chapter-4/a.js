//Data structures: Objects and Arrays

/*
Array is a Data type specifically for storing sequences of values.
an array is written as a list of values between square brackes,
separated by commas.
*/

let listOfNumbers = [2, 3, 5, 7, 11];
/**
 * Notation of getting at the elements
 * inside an array also uses square brackets
 * THe first index in array is zero and not one.
 */
/*
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 - 1]);
*/

//Properties
/**
 * expression like myString.length(to get the length of string)
 * Math.max( the maximum function).
 * These are expressions that access property of some value
 * 1st case we access the length property of the value stored
 * in myString.
 *
 * All JavaScript values have properties
 * except fot null and undefined.
 */
/*
null.length;
*/

/**
 * Two main ways to access a property in JS are with a dot
 * and with a square brackets
 * Both value.x and value[x] access the property on value
 * but not necessarly the same property.
 *
 * when using the dot nation, the word after the dot is the literal
 * name of the property.
 * when using square brackets, the expression between the square
 * brackets is evaluated to get the prperty name.
 * Whereas value.x fetches the property of the value named "x",
 * value[x] tries to evaluate the expression x and uses the result,
 * converted to a string as the property name.
 *
 * so if yu know the property you're interested is is called "color"
 * you say value.color.
 *
 * If you want to extract the property named by the value held in the
 * binding i, you say value[i]
 */

/*
console.log(listOfNumbers.length);
*/

//Methods
/**
 * Properties that contain functions are generally
 * called methods of the value they belong to
 * as in toUpperCase is a method of the string.
 * every string has toUpperCase property
 */
/*
let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());
console.log(doh.toLocaleLowerCase());
*/

/*
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);
console.log(sequence[0]);
*/
/**
 * The push method adds values to the end of array
 * and the pop method remove the last value in the array
 * and return it.
 * These are tradition terms for operations on
 * stack.
 * A stack in programming, is a data structure that allows you to push
 * values into it and pop them out again in the opposite order
 * so that the thing that was added last is removed first.
 */
