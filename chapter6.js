//objects in js
//using object leterals
const student=
{
    name:"ritik rai",
    age:22,
    grade:7.2
}
console.log(student.grade);
//not the right way to access the object
//the right way is student["name"]
console.log(student["name"]);
//deaclaring a symbol in js
const mysmb=Symbol("key1");
//taking a symbol in a js object has special syntax given below
//interview purpose
const teacher={
    name:"vandana bhatia",
    age:30,
    nature:"good",
    sym:"mykey1",
    [mysmb]:"mysymbolkey"
}
console.log(typeof teacher["sym"])
console.log(typeof teacher["mysmb"])
//manipulating object values
student.grade=8;
console.log(student["grade"]);
//freezing an object so no values could be changed in it
Object.freeze(teacher);