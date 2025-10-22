var message1 = "There are ";
var message2 = 16;
var message3 = " students";
console.log(message1 + message2 + message3)

// + operator overloaded if one of the operand is a string, it'll do implicit conversion
// official name is coercion 

console.log(`There are ${16 + ""} students`); // another implicit conversion

// only number + number will give math operation

function addAStudent(numStudents) {
    return numStudents + 1; // vulnerable to string
}

addAStudent(Number(studentInputElem.value)); // for web dev, inputs are a string