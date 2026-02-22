// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve();
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("resolve consumed");
// })
// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("ASYNC TASK 2 IS COMPLETED");
//         resolve();
//     },2000)
// })
// promiseTwo.then(function(){
//     console.log("PROMISE CONSUMED")
// })

// const promiseThree = new Promise(function(resolve ,reject){
//     setTimeout(function(){
//         resolve({username:"devansh",email:"dev@example.com"})
//     },2000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false;
        if(!error){

            resolve({username:"dev",password:"123"})
        }
        else{
            reject('ERROR:something went wrong')
        }
    },2000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("resolve and reject are exected succesfully")
})

//this part of the promise is done by using async await
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"raghav",password:"12345"})
        }
        else{
            reject("ERROR:something went wrong");
        }
    },2000)

})
// async await do not handle the error .so we use try catch method for async await
async function getAllusers(){
    const response= await promiseFive
    console.log(response)
}
getAllusers();

//async await with try and catch
const promiseSix = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({usename:"gupta",password:"321"})
        }
        else{
            reject("ERROR:something went wrong")
        }
    },2000)
})
async function consumePromisesix(){
    try{
        const response = await promiseSix
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
consumePromisesix()

// using fetch method for the promise
async function fetchUsers(){
    try{

        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }

}
fetchUsers();
// method two by writing then and catch without using try and catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    console.log(response)
})
.then((data)=>{
    console,log(data);
})
.catch((error)=>{
    console.log(error);
})



