var greeting = "Hello class";
var something = greeting / 2;
console.log(something);

something;
console.log(something); // NaN at this point of time, conversion from string to number failed
console.log(Number.isNaN(something)); // returns true 
console.log(Number.isNaN(greeting)); // returns false, 