// const myarr = [2,9,0,6];
// console.log(myarr);
// myarr.push(7);
// myarr.push(1);
// myarr.push(4);
// myarr.push(3);
// console.log(myarr);
// myarr.pop(2);
// myarr.pop(3);
// console.log(myarr);

// myarr.unshift(56)
// console.log(myarr);
// console.log(myarr.index[3]);
// console.log(myarr.indexOf(56));
// myarr.shift();
// console.log(myarr);

// console.log(myarr.indexOf(3));
// console.log(myarr.indexOf(9));
// console.log(myarr.includes(0));
// console.log(myarr.includes(6));
// console.log(myarr.includes(5));
// console.log(myarr.slice(1,3));
// console.log(myarr.splice(1,3));
// console.log(typeof(myarr));



// const myarr2 = [4,3,2,[1,2,3],4,5,[6,7]]
// const newarr = myarr2.flat(Infinity)
// console.log(newarr);

const heroes = ["Bheem","Raju","Jaggu"]
const name = ["Devansh","shivanand","Anil"]
// const newheroes = heroes.concat(name);
// console.log(newheroes);
const all_heroes = [...heroes, ...name]
console.log(all_heroes);