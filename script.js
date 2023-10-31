//object destructing:


const obj={

    names:"john",
    age:30,
    address:{
        city:"chennai",
        state:"Tamilnadu"
    }

}

//without  destructuring:

/*console.log(obj.names);
console.log(obj.address.city);*/

//with destructuring

//const {key}=objectname;

const{names,age,address:{city}}=obj;
console.log(names);
console.log(age);
console.log(city);

