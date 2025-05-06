const score = 300
console.log(score);

const value =  new Number(100)
console.log(value);

//toString function is usede to convert given numbr into string type
console.log(value.toString());
console.log(value.toString().length);

//toFixed is used to write no. of zeroes after decimal the number
console.log(value.toFixed(2));

//toPrecision is used to round of the given floating number
const balance = 1623.87554

console.log(balance.toPrecision(2));
console.log(balance.toPrecision(4));
console.log(balance.toPrecision(3));
 
// toLocaleString is used to write the given number in the form of given country style
const hundreds = 100000
console.log(hundreds.toLocaleString("en-IN"));

const time = new Date
console.log(time.toLocaleString());

// +++++++++++++++++++MATH+++++++++++++++++

console.log(Math);
// .abs() is used to convdrt the given negative number into positive number but the given positive number is same positive
console.log(Math.abs(-4));
console.log(Math.abs(-66));
console.log(Math.abs(4));

console.log(Math.round(4.7));
console.log(Math.round(3.2));
console.log(Math.ceil(2.8));
console.log(Math.floor(8.9));
console.log(Math.max(4,3,7,8,9));
console.log(Math.min(1,0,4,9));
const min = 10
const max = 20
console.log(Math.random());
console.log(Math.floor(Math.random()*(max-min+1))+min);