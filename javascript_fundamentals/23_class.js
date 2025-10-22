class Workshop { 
    constructor(teacher) { 
        this.teacher = teacher;
    }

    ask(question) {  // does the prototype.ask under the hood as per previous file
        console.log(this.teacher, question);
    }
}

var deepJS = new Workshop("Kyle")
var reactJS = new Workshop("Suzy");

deepJS.ask("hi")
reactJS.ask("hello")