// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// This method calls on the command to lower the case of the entire sentence. As a result, the input, if the code was enter with a console.log command 
// first would yield "hello world"

"Hello World".includes("Hello");

// this function is asking if the string includes the word "Hello" within in it. because it does, the return value would be "true"

"Hello World".endsWith("Hello");

// The parameters of this function are to check that the string "Hello World" ends with "Hello". because the arguement is not passed, it returns a value of false

"Hello World".endsWith("rld");

// This method is asking if the defined value "Hello World" ends with "rld" and because it does, it would yield true

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// I established the two variables of my pets names and used the "toLowerCase" function to make it so my dogs name would print in lower case.
// I used the "endsWith" function to check if my cats name ends with S but because it does not end in capital S, the yield would be False
var dogsName = "Toast"
var catsName = "Jenkins"
console.log (dogsName.toLowerCase())
console.log (catsName.endsWith("S"))

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var pets = ["Toast", "Jenkins"]
var costs = [42, 33, 21]
// i use the sort command to sort my two pets alphabetically
console.log (pets.sort())
// I use the join command to see what my costs are without the brackets
console.log (costs.join())