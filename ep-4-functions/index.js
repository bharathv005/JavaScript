// //function declaration

// function sum(a,b){
//     console.log(a+b);
// }
// sum(100,200);

// //expresstion

// const dis=function sum(a,b){
//     console.log(a+b);
// }
// sum(10,2);

// //callback

// const see = function(callb){
//     console.log("Hee...")
//     setTimeout(function(){
//         callb();
//     },2000);

// }

// const callb=function(){
//     console.log("Hello all");
// }

// see(callb);





// //higher-order-function

const radius =[1,2,3,4,5]

const area = function(r){
    const result = [];
    for(let i=0;i<r.length;i++){
        const a= Math.PI * r[i]*r[i];
        result.push(a);
    }
    console.log(result)
}
area(radius);



//arrow function

const multiply=(n1,n2)=>{
    console.log(n1*n2);
}

multiply(10,20)