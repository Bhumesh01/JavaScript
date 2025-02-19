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
//There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers. They are: Infinity, -Infinity, NaN(Not a Number)
console.log(Infinity *Infinity); 
console.log(-Infinity *Infinity);
console.log(Infinity/Infinity);
console.log(0/0);
console.log(Infinity-Infinity);
console.log(NaN + 5);
console.log(`Type of Infinity: ${typeof(Infinity)}, Type of -Infinity: ${typeof(-Infinity)}, Type of NaN: ${typeof(NaN)}`)
// String:You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at the start and the end of the string match.
let string = "Hello World";
string = `Hello World`;
string = 'Hello World';
console.log("This is The first line \nThis is the second line"); // one can use backslash n to add new line in our string
console.log( "A newline character is written like \"\\n\"."); // /" are used to add quotes in our string..however if two backslash follow each other they collapse together, and only one will be left in the resulting string value.
//Unary operators: Not all operators are symbols. Some are written as words. One example is the typeof operator, which produces a string value naming the typeof the value you give it.
console.log(typeof 4.5); // o/p: number
console.log(typeof "x"); // o/p: string
console.log(typeof typeof 5); // o/p: string
console.log(typeof console.log(8)); // first 8 is logged and then undefined, typeof console.log() is undefined
console.log(- (10- 2)) ; // -8...The minus operator (-) can be used both as a binary operator and as a unary operator.
// Boolean
let isActive = false;
console.log("Z" > "a"); // o/p:  false as uppercase are always less than lowercase
//There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.
console.log(NaN === NaN); // o/p: false
//Empty values: There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information. Many operations in the language that don’t produce a meaningful value yield undefined simply because they have to yield some value. The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time.
console.log(null == undefined); // o/p: true as they are both treated as "absence of value" and are loosely compared.
console.log(null === undefined); // o/p: false as  both are not considered equal because they are of different types. null is an object, while undefined is a primitive value.
console.log(typeof null, typeof undefined, typeof typeof undefined, typeof typeof null);
let test;
console.log(test); // undefined
console.log(typeof test === "undefined", typeof test === undefined); // first is true and second is false because typeof always results into string, and also a is uninitialized so its answer is: "undefined"

// Array: it is the collection of data items. it is resizable and can contain a mix of different datatypes.
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
//  || has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest. 

// Functions: They helps to implement a particular function. They help in code reusability.
// Function declaration
function greet(name) {
    return "Hello, " + name;
}
// Function call
let message = greet("John"); // "Hello, John"
//function to multiply n numbers
function multiplyNumber(...numbers){
    let result = 1;
    for(let i=0; i<numbers.length; i++){
        result *= numbers[i];
    }
    return result;
}
console.log(multiplyNumber(1,2,3,4,5,6,7,8,9,10));
//function to tell if a person can vote or not.
function Vote(age){
    return age>=18? true:false;
}
console.log(Vote(25));

// if-else: these are conditional statements that is, they implement the block of code if the condition is true.
let num = 25;
if(num<10){
    console.log("The number is less than 10");
}
else if(num<20){
    console.log("The number is less than 20");
}
else{
    console.log("The number is greater than 20");
}
//check for odd or even
if(num%2 === 0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}

//Loops: They are used to repeat a block of code; they are of 2 types:
// 1. for loop: used to repeat a block of code given number of times. Here the example of a program that display first 5 whole numbers
for(let i=0; i<5; i++){
    console.log(i);
}
// 2. while loop: thay are used to repeat a block of code until a given condition is false.
let flag = 0;
while(flag<5){
    console.log(flag);
    flag++;
}

// concept of functional scope and block scope
// functional scope: the variables declared with var are functional scoped. The variable is only accessible within the function in which it is declared. Eg:
function example1(){
    var x = 1;
    if(true){
        var x = 2; //redeclared the same variable
    } 
    console.log(x);
}
example1();
// block scope: variable declared with let and const are block scoped. The variable is only accessible within the curly brace in ehich it is declared. each bllock creates a new scope. Eg:
function example2(){
    let x = 1;
    if(true){
        let x = 2; // it treats as a different variable. x is a local variable here. if i dont declare this variable and try to log x, then it print 1 as the outer x acts as a global variable and it is accessible inside this if block.
        // This is the concept of Lexical Scoping
    }
    console.log(x);// prints 1
}
example2();

//Object: An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.  Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). 
// Eg1:
let user = {
    Fname: "Jack",
    age: 19,
    placesVisited: ["Goa", "Mumbai", "Srinagar"]
}
console.log("The age of " + user.Fname + " is: " + user.age);
console.log(user.Fname + " has visited " + user.placesVisited.length + " places: " + user.placesVisited);
// Eg2:
function greetings(user){
    let fname = user.Fname;
    let age = user.age;
    let gender = user.gender;
    let isMarried = user.isMarried;
    // greet user
    if(gender === "M"){
        console.log("Hi Mr." + fname + " your age is: " + age);
    }
    else if(gender === "F" && isMarried === false){
        console.log("Hi Ms." + fname + " your age is: " + age);
    }
    else{
        console.log("Hi Mrs." + fname + " your age is: " + age);
    }
    // check if the user can vote
    if(age>=18){
        console.log("You can vote");
    }
    else{
        console.log("You cannot vote");
    }
}
greetings({Fname: "John",
    age: 50,
    gender: "M",
    isMarried: true
});
greetings({Fname: "Julie",
    age: 40,
    gender: "F",
    isMarried: true
});
greetings({Fname: "Jasy",
    age: 15,
    gender: "F",
    isMarried: false
});
//Eg3: Array of objects:
const users = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}
];

console.log("Name: " + users[0].name + " Age:" + users[0].age);
//Eg4: Object of Objects
const user1 = {
	Fname: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}
console.log("Name: " + user1.Fname + " Age: " + user1.age + " City: " + user1.address.city + " Country: " + user1.address.country + " Address: " + user1.address.address )

// Array Properties: In JavaScript, arrays are special objects, but they work differently from regular objects when it comes to property names (or keys).JavaScript arrays use nonnegative integers (0, 1, 2, etc.) as valid indices. If you try to use a string (other than a string representation of a number), the array treats it as an object property, not an actual array index. Dot notation cannot be used when the property name starts with a number.
years = [2020,2021,2022,2023,2024,2025];
// 1. JavaScript allows accessing array elements using string representations of numbers (arr["2"] is treated as arr[2] ('2' is coerced to number)).
console.log(years[2] === years['2']);
// 2. However, arbitrary strings like "02" are treated as object properties, not array indices.
console.log(years['2'] === years['02']);
// 3. arr.push("elements"): used to added elements at the end of the arr
//NOTE: JavaScript arrays behave more like hash maps (objects) where numeric indices are just keys. If the array is densely packed (like [1, 2, 3, 4]), JavaScript may optimize it to store elements contiguously. If the array has empty slots, JavaScript treats it as a sparse array, meaning it does not allocate memory for empty slots.
years.push(2026, 2027);
console.log(years);
years[9] = 2029; 
console.log(years[8]); // this is an empty slot. Empty slots do not exist in memory—JavaScript simply skips them.No address is allocated for them. If you explicitly assign undefined, then memory is allocated for that index. undefined is a stored value, while empty slots are just gaps in the array. Loops and operations behave differently for empty slots vs. undefined
console.log(Object.keys(years));
console.log(years.length);
console.log(years);
// 4.  A). Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined. Such an array is called sparse array.
years.length = 15;
console.log(years);
console.log(years[12]);
// B). Decreasing the length property does, however, delete elements.
years.length = 2;
console.log(years);
console.log(Object.keys(years));
console.log(years.length);
console.log(typeof years);
// 5. Associative Array Behavior: Indexed elements (years[0], years[1], etc.) contribute to length. Named properties (years["myKey"] = "value";) do not affect length because they are just additional properties on the array object.
years["myKey"] = "value";
console.log(years);
console.log(years.length);
// 6. at(): The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
years.push(2022, 2023 ,2024, 2025);
console.log(years);
console.log(years.at(2));
console.log(years.at(-1));
// 7. concat(): The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. Syntax: arr1.concat(arr2, arr3, ....);
years_2 = [2018, 2019];
years_3 = years_2.concat(years); // here it can be any number of arrays
console.log(years_3);
// 8.  fill(): The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array. Syntax: arr.fill(value_to_fill, startingIndex, stoppingIndex); here starting index is included but ending index is not included.
console.log(years.fill(2026, 1, 3));
// 9. filter(): The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. Syntax: arr.filter(callbackFn);The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array. Thus the callbackFn must return either true or false value depending upon the condition
// NOTE: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word)=>word.length>6);
console.log(result);
console.log(([1, , , undefined, , , undefined].filter((element)=> element === undefined)).length)
// the output of above code shows that the empty elements donot stores the value undefined
// 10. find(): The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
console.log(years.find((element)=>element>2026));
console.log(years.indexOf(years.find((element)=>element>2021)));
// 11. findLast(): The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
console.log(years.findLast((element)=> element>2021))
// 12. forEach(): The forEach() method of Array instances executes a provided function once for each array element. It has no affect on the original elements of the array.
years.forEach((element)=>{
    element += 1;
    console.log(element);
})
console.log(years);
// 13. join(): The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const date = ["01", "04", "2005"];
console.log(date.join("-"));
// 14. keys(): The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
// Note: 1. .keys() returns an iterator of only numeric indices. 2. One can use Object.keys() to get all property names (both numeric and object properties).
console.log(years.keys());
for( let key of years.keys()){
    console.log(key);
}
// 15. map(): The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
const map1 = years.map((element)=> element-1);
console.log(map1);
console.log(years);
// NOTE: forEach() => Purpose: The forEach() method is used to perform an operation on each element of an array. It does not return anything; it's used for side effects (e.g., modifying data or logging). Return Value: undefined. It doesn't return a new array. Use Case: When you want to perform an action on each element without needing a result (e.g., console logging, updating variables). map() => Purpose: The map() method is used to transform each element of an array into a new value and return a new array containing the results. Return Value: A new array where each element is the result of applying a function to the original array's elements. Use Case: When you want to transform elements of an array and get a new array with the transformed values.
// 16. reduce(): The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
console.log(years.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue; // here, 0 is the accumulator and currentValue is 1
}))
console.log(years.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 7856)) // here, 7856 is the accumulator and currentValue is 0
// 17. reverse(): The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
console.log(years.reverse());
// 18. shift(): The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(years.shift());
console.log(years.length);
console.log(years);
// 19. slice(): The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(years.slice(2));
console.log(years.slice(2, -1));
// 20. sort(): The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values. Syntax: sort() or        
// sort(compareFn): A function that determines the order of the elements. The function is called with the following arguments: a: The first element for comparison. Will never be undefined. b: The second element for comparison. Will never be undefined. The function should return a number where: A negative value indicates that a should come before b. A positive value indicates that a should come after b. Zero or NaN indicates that a and b are considered equal.
console.log(years.sort()); // ascending order
console.log(years);
console.log(years.sort((a, b)=> b - a)) // descending order as if b-a>0 it means a will appear after b; if b-a<0 it means a will appear before b; if a-b===0 the order remains unchanged
console.log(years);
// 21. splice(): The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Syntax: splice(start, deleteCount, item1, item2, /* …, */ itemN)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserting new element
console.log(months);
months.splice(1, 1); // deleting an element
console.log(months);
months.splice(3, 1, 'May' ); // replacing an element
console.log(months);
// 22. toString(): The toString() method of Array instances returns a string representing the specified array and its elements.
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
// NOTE: Important: If the array has nested arrays, they will be converted to strings with their elements also separated by commas.
let arr = [1, [2, 3], 4];
console.log(arr.toString()); // "1,2,3,4"

// Mutable and Immutable: 
/*
Mutable: A mutable value is one that can be changed without creating an entirely new value, in comparison with immutable values.
In JavaScript, objects and arrays are mutable by default — their properties and elements can be changed without creating a new object or array. 
Immutable: An immutable value is one whose content cannot be changed without creating an entirely new value, in comparison with mutable values. In JavaScript, primitive values are immutable — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value. The primitive data types includes: string, number, bigint, boolean, undefined, symbol, null.
Eg: 
*/
// Any operation that appears to modify a string actually creates a new string instead of altering the original one.Methods like .slice(), .replace(), .toUpperCase() do not change the original string but return a new one. Strings are immutable → The actual string value cannot be changed after creation. Variables can be reassigned → A variable holding a string can point to a new string.
let str = "Hello";
str[0] = "J";  // This won't change the string
console.log(str); // Output: "Hello"
// Here, JavaScript does not allow modifying "Hello" directly. This proves immutability.
str = "J" + str.slice(1); // Creates a new string "Jello"
console.log(str); // Output: "Jello"
//Here’s what’s happening: "J" + str.slice(1) creates a new string ("Jello"). The variable str is now assigned to this new string. The original "Hello" still exists in memory until garbage collection removes it.
// Analogy: Imagine you write a word on a whiteboard with a marker. If you want to change a letter, you can simply erase and rewrite it (mutable—like arrays). But strings aren’t like that. Instead, they’re like sticky notes. Once you write something on a sticky note, you cannot erase or change the letters. If you want a different word, you write it on a new sticky note and throw away the old one.
let myNumber = 12254;
myNumber[2] = 1; // this too doesn't works
console.log(myNumber); 
// JavaScript is known for its "fail-silent" behavior in many cases. Instead of throwing an error, it just ignores the invalid operation. This prevents unnecessary crashes in code execution. JavaScript prioritizes flexibility over strictness.

// Object Properties: 
// 1. object.assign(): The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. Return value The target object. Properties in the target object are overwritten by properties in the sources if they have the same key.
const target = {a: 1, b: 2};
const source = {b: 4, c: 5};
const returnedTarget = Object.assign(target, source);
console.log(target, source, returnedTarget);
console.log(returnedTarget===target);
