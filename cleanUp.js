// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { prompt("Hello, what is your name?") }
askForName()

// changed console.log to prompt so it will actually ask for your name and you can enter it

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }

console.log (addThreeNums(1, 2, 3));
console.log (addThreeNums(4, 2, 7));

// added console.log to the beginning of each addThreeNums function use so that it would print the result of the function

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

// Wrote out the word function instead of abbreviating it

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

console.log (average (3, 30))

// added console.log line to make it print out the result of the function, also added numbers to make it work