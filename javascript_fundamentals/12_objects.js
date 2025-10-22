// Use new 
// Object()
// Array()
// Function()
// Date()
// RegExp()
// Error()

// Don't use new, changes value into the type
// String()
// Number()
// Booolean()

var yesterday = new Date("October 22, 2025");
console.log(yesterday.toUTCString());

var myGPA = String(85); // type conversion
console.log(typeof myGPA)

var test = new String(65)
console.log(test);
console.log(typeof test);
