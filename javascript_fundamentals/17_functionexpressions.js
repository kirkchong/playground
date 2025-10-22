// Function is a first class value, can be passed around, assigned or returned

// anonymous function expression
var clickHandler = function () { }
var id = people.map(person => person.id)

// named function expression
var keyHandler = function keyHandler() { }
var id = people.map(function getId(person) { return person.id })
