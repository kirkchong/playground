// Closure is when a function "remembers" the variables outside of it, even if you pass that function elsewhere

function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 100); // waitASec has closure over question var, as it's holding for 1 sec
}

ask("whats closure")

function ask2(question) {
    return function holdQuestion() {
        console.log(question); // holds question variable contents
    }
}

var a = ask2("what");

a();