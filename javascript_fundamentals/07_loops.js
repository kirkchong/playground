var students = ["f", "e", "l"]

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

for (let student of students) {
    console.log(student)
}

while (students.length > 0) {
    let student = students.pop();
    console.log(student); // prints in reverse, l , e, f
}