// creating an object

let person={
    name:"Ann",
    age:20,
    height:"5Ft",

    friend:{
        name:"Beryl",
        age:25,
        
    }
}
let person1=new Object();
console.log({person1});
person1.name="Edith";
person.age=40;
console.log({person1});
console.log(person.age);
person["age"]=25;
console.log({person});
console.log(person.friend.age);

