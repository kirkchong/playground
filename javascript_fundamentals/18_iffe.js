// immediately invoked function expression

var teacher = "kyle";

(function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher);
})(); // the execution happens here, the last round brackets

console.log(teacher);

(function declareFunction() {
    console.log("do nothngi");
});