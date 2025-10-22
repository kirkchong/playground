// Falsy values, false when converted to boolean
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(false))
console.log(Boolean(undefined))

// Truthy values, everything else is true
console.log(Boolean(-1))
// while (newStudents.length) { // implicit conversion to boolean
//     enrollStudent(newStudents.pop());
// }

var enrol1 = 16;
var enrol2 = "17";
let eg = !!enrol1; // another way to convert to boolean

if (Number(enrol1) < Number(enrol2)) { // explicit conversion
    console.log("Enrol 2 has more students")
}

if (enrol1 < enrol2) {  // implicit conversion to numbers, if 1 side is a number
    console.log("Enrol 2 has more students")
}