 const JSuser = {
    name:"Devansh",
    email:"devansh123gmail.com",
    address:"Sitapur",
    age: 20,
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Tuesday"]


 }
 console.log(JSuser);

 console.log(JSuser.email); //this is not a good method to access the variables inside the object
 console.log(JSuser["email"]); //use big bracket to access the variables in the objects
 console.log(JSuser["address"]);

 JSuser.address ="Khairabad Sitapur";
 JSuser.age = 21;
 JSuser.name = "Devansh Gupta"
 // for updation in the previous data we have to use the object name with dot and write the updates in the data 
 console.log(JSuser);
 console.log(JSuser["address"]);

//  Object.freeze(JSuser); // for locking the informa5tion inside the object we use freeze function 
//  JSuser.address = "Makhupur" ;
//  console.log(JSuser);
 
 JSuser.greeting = function(){
    console.log("hello JSuser");
 }
 console.log(JSuser.greeting());// the above method is for the writing the greetings  

 JSuser.greetinTwo = function(){
    console.log(`hello JSuser,${this.name}`);// this.name method id used for same object reference
 }
 console.log(JSuser.greetinTwo());

 JSuser.greetingThree = function(){
    console.log(`HAPPY BIRTHDAY,${this.name}`);
 }
 console.log(JSuser.greetingThree());