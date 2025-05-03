// stack:
// it is a primitive datatype
// all the primitive datatype gives the copy to save the changes
// it uses a copy of the original variable to save the changes of the given data
// heap:
// it is a non primitive datatype
// all nonprimitive datatype gives the original copyu to =save the changes of the given data
// it uses a original copy to save the current changes

let score=100
let value=score
value =25
console.log(score);
console.log(value);

 let Objectone = {
    myEmail :"Devansh@google.com",
    Password:"123"
}
let  Objecttwo = Objectone

Objecttwo.myEmail ="Raghav@123.com"


console.log(Objectone.myEmail);
console.log(Objecttwo.myEmail);

