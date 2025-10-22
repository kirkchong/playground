// this
// functions this references the execution context of the *call*, determined entirely by how the function was called
// this-aware function is dynamic, based on context


var workshop = {
    teacher: "Kyle",
    ask(question) { 
        console.log(`${this.teacher} - ${question}`) // dont have to look at other code for this.teacher
    }
}

workshop.ask("why hello there") // this line populates the this context to provide this.teacher

function ask(question) { 
    console.log(this.teacher, question);
}

function otherClass() { 
    var myContext = {
        teacher: "Suzy"
    };
    ask(myContext, "why?"); // undefined
    ask.call(myContext, "why?") // passes in context
}

otherClass();