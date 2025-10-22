// Scope: where to look for things, where things are stored

x = 42;
// where is x stored

console.log("something")
// find console in memory

var teacher = "teach1"

function otherClass() {
    teacher = "teach2";
    something = "sumting"; // loosy mode allows this, creates in outer scope
}

otherClass();
console.log(teacher);
console.log(something);


// undeclared - variables that have never been declared
// undefined - declared but has no value