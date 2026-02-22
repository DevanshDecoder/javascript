const promiseThree = new Promise(function(resolve ,reject){
    setTimeout(function(){
        resolve({username:"devansh",email:"dev@example.com"})
    },2000)
})
promiseThree.then(function(user){
    console.log(user);


})
