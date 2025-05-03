// two types of DATATYPE CAATEGORIES ON THE BASIS OF THEIR STORING VALUES AND ACCESS THEM
// PRIMITIVE(7):NUMBER,BOOLEAN,STRING,BIGINT,SYMBOL,
// NON PRIMITIVE(CALL BY REFERENCE)(3):ARRAY,OBJECT,FUNCTION.

const score =100
console.log(typeof score);

const mySymbol =Symbol("123")
console.log(mySymbol);
console.log (typeof mySymbol);

const myString ="Devansh"
console.log(typeof myString);

// here n will be necessary to write after the number othrwise it will not be a bigInt type of datatype.
const bigNumber =123456n 
console.log(typeof bigNumber);

// non primitive datatypes
myArray =["abc",12,"false"]
myObject= Object(){
    // tghe content written inside the curly braces known as object
}

myFunction =Function(){
    // the content written inside the function keyword is known as the content of the function
}

