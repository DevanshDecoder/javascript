// const tinderuser = new Object();
// console.log(tinderuser);

const tinderuser = {};// singleton constructor csn be written either this type or above mentioned method
// console.log(tinderuser);

const webuser = {

    email:"devansh123gmail.com",
    contact:123456784,
    id:1234,
    password:"Deva123",
    fullname:{
        userfullname:{
            firstname:"Devansh",
            lastname: "Gupta",
        }

    }
};

// console.log(webuser);
// console.log(webuser.fullname.userfullname.firstname);

const obj1 = {
    email:"shiva132@gmail.com",
    contact:5467387865,
    fullname:{
        firstname:"shiva",
        lastname:"Gupta",
    }
};
// console.log(obj1);
const obj2 = {
    email:"Deva132@gmail.com",
    contact:5467487865,
    fullname:{
        firstname:"Deva",
        lastname:"Gupta",
    }
};
const obj3 ={"1":"D","2":"E"};
const obj4 ={"3":"v","4":"A"};
const obj = Object.assign(obj3,obj4);
console.log(obj);
console.log(typeof(obj));

console.log(Object.keys(webuser));
console.log(Object.values(webuser));
console.log(Object.entries(webuser));

console.log(webuser.hasOwnProperty("isLoggedIn"));//haaOWnProperty is used to check that the property is existing in the code or not
console.log(obj1.hasOwnProperty("password"));