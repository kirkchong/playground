var teacher = "Kyle"

// block scoping
{
    let teacher = "Suzy";
    console.log(teacher);
}

console.log(teacher);

function formatStr(str) {
    {
        let prefix, rest;
        prefix = str.slice(0, 3); 
        rest = str.slice(3); //prefix and rest only exists up to here
    }
}