const gameName = "raghav" 
const repocCount = 50
console.log(`hello this si my game name ${gameName.toUpperCase} `);

const myString = "Devansh-Gupta"
console.log(myString);
console.log(myString.toUpperCase);
console.log(myString.charAt(5));
console.log(myString.indexOf('v'));

const stringTwo = "Adarshgupta"
console.log(stringTwo.substring(0,5));
console.log(stringTwo.length);

//we have to assign a  new variable when we use slice keyword/function
const newString = stringTwo.slice(-8,9)
console.log(newString);

const myLaptop = "   This-is-my-laptop   "
console.log(myLaptop);
console.log(myLaptop.trim());

//split is used when we have to convert required string into array
console.log(myLaptop.split("-"));

const url = "https://devansh.com/devansh%25gupta"
console.log(url.replace('%25','-')); 
console.log(url.includes('devansh'));
