// destructuring in object and array


// array
const arr = [1, 2, 3, 4, 5];

const [a,b,c,d,e]=arr;
//console.log(b)

//object

const person = {
    name: "John",
    age: 30,
    gender: "Male",
    city: "New York"
};

const {name, age, city} = person;
//console.log(person.name);