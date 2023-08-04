// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function Greetings () {
    return console.log ("Hello!")
  }
  
  Greetings ()

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreetings(name) {
    return (`Hello ${name}!`)
  }
  
  var hey1 = customGreetings("Lex")
  var hey2 = customGreetings("Blinkus")
  
  console.log (hey1)
  console.log (hey2)

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function customGreetings(firstName, middleName, lastName) {
    return (`Hello ${firstName}! Did you know your last name is ${lastName}? Your middle name is ${middleName} too!`)
  }
  console.log (customGreetings("Alexandre", "Gary", "Hastings"))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    return num * num
  }
  
  console.log (square (4))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock (quantity, item){
    if (quantity===0){
      console.log (`${item} - OUT of stock!`)
    } else if (quantity >=4){
      console.log (`${item} is stocked`)
    } else {
      console.log (`${item} - running LOW!`)
    }
  }
    