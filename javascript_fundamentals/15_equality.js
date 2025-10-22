// commonly misunderstood

// == (checks value) (loose)
// === (checks value and type) (strict)

// actually
// == (allows coercion) (types different)
// === (disallows coercion) (types same)

var num1 = 16;
var num2 = 16 + 0;
console.log(num1 == num2);
console.log(num1 === num2);

var mystring = "test"
var mystring2 = `${mystring}`;
console.log(mystring == mystring2);
console.log(mystring === mystring2);
// when types are same, == and === return the same value 100% of the time

// argument for ==
var workshop1 = { topic: null };
var workshop2 = {};

if (
    (workshop1.topic === null || workshop1.topic === undefined) &&
    (workshop2.topic === null || workshop2.topic === undefined)
) {
    console.log('long if statement')
}

// null and undefined are same if ==
console.log(null == undefined)
console.log(null === undefined)
if (
    workshop1.topic == null && workshop2.topic == null
) {
    console.log('more readable')
}