function Workshop(teacher) { 
    this.teacher = teacher;
}

Workshop.prototype.ask = function (question) { 
    console.log(this.teacher, question);
}

let deepJS = new Workshop("Kyle")
let reactJS = new Workshop("Suzy");

deepJS.ask("Is prototype a class"); // sets the context
reactJS.ask("prototype be ugly"); // sets the context