//Comments in Java Script

// We can declare a Variable in Javascript using 3 variables: const, let and var.
// 1. const : a constant variable cannot be reassigned and has a block scope.
const age = 30;
// The following code will give error, TypeError: Assignment to constant variable.
// age = 52; 
// console.log(age);
// 2. var: older way to declare variables, functioned scoped and can be redeclared.
// a var variable can be redeclared because var is hoisted to the top of its function scope, so multiple declarations are merged.
var myName = "John";
var myName = "Jack";
console.log(myName); // this will throw no error
//  let: variable that can be reassigned ie reinitialized and it has a block scope
let isStudent = true;
isStudent = false;
console.log(isStudent);

// Data Types in JS:
//  Number
let number = 42;
number = 42.4251;
console.log(number);
// String
let string = "Hello World";
// Boolean
let isActive = false;
// Array: it is the collection of data items
let numbers = [1, 2, 3]; // homogeneous
numbers = [1, 'a', false, "Hello"]; // heterogeneous
console.log(numbers);

//Operators in JS
// 1. Arithmetic: +, -, *, /, %, **
let sum = 10 + 5;
let diff = 10 - 5;
let multiply = 10 * 5;
let divide = 10 / 5;
let remainder = 10 % 4;
let exponential = 10 ** 4;
console.log( sum, diff, multiply, divide, remainder, exponential);
// 2. Comparison operators: it's of 2 types
// == : it is called the loose equality. it checks the only the value not the datatype. it converts type if needed
// here the number 5 will be converted to string.... 
// NOTE: for comparison and addition if one operand is string then the other(numeral) is converted to string, otherwise string will convert. This concept is called Coercion(implicit type conversion)
console.log('5'== 5);
// console.log('5'+ 5);
// console.log('5' * 5);
// === : it is called the strict equality. it checks bothe the datatype as well as the value. here their is not type conversion.
console.log('5' === 5);
// other comparison operators includes: >=, <=, <, >
// 3. Logical operators : and(&&), or(||), not(!)
console.log((5 < 55) && (5 < -1));
console.log((5 < 55) || (5 < -1));
console.log(!((5 < 55) && (5 < -1)));
// 4. Assignment operators: used to assign the value. it includes =, +=, -=, *=, /=, %=, **=
sum += 10;
console.log(sum);
// 5. Bitwise operators: works at binary level.
let a = 5, b = 3;
// a = 101, b = 011 in binary
// and operation: a&b = 001 o/p = 1
console.log(a & b);
// or operation: a|b = 111 o/p = 7
console.log(a | b);
// xor operation: a^b = 110 o/p = 6
console.log(a ^ b);
// not operation: ~a = 010 o/p = 2
console.log(~a);
// left shift operation: a << 1 = 1010 o/p = 10
console.log(a << 1);
// right shift operation: a >> 1 = 010 o/p = 2
console.log(a >> 1);
// 6. Ternary operator: ?
let myage = 18;
let canVote = myage>=18 ? true: false;
console.log(canVote);
// 7. Type operator: typeof operator is used to check the data types
console.log(typeof myName, typeof myage, typeof canVote, typeof [], typeof {});
// 8. Spread and rest operators: spread (...): is used to expand the array/object; rest(...): gathers function arguments
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // spread operator
console.log(arr2);
// rest operator
function add(...numbers){
    let result = 0;
    for(let i=0; i<numbers.length; i++){
        result += numbers[i];
    }
    return result;
}
console.log(add(55,100,45));
// 9. Nullish Coalescing (??): Returns the right-hand value if the left-hand value is null or undefined.
let username = null;
console.log(username ?? "Guest");