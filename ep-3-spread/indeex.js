//spread operator

const arrs =[1,2,3];

const dup= [...arrs];
console.log(dup);

//object

const obj1={
    a:1,
    b:2,
};

const obj2={
    c:"Hello",
    d:"developers"
}

const res={...obj1,...obj2}
console.log(res)

//function

function sum(...arg){
    console.log(a+b+c)
}

sum(1,2,3,4,5);