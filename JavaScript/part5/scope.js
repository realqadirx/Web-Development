// Function Scope.
// let sum = 54; //Global Scope

// function calSum(a, b) {
//     let sum = a + b; //Function Scope
//     console.log(sum);
// }
// calSum(2, 3);
// console.log(sum);



// Block Scope.
// {
//     let a = 25;
// }


// console.log(a);

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// console.log(i);

// let age = 25;
//  if(age >= 18){
//     let str = "Adult";
//     console.log(str);
//  }




// Lexcial Scope.
// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }

//     innerFunc(); 
// }




// let greet = "hello"; //Global Scope.

// function changegreet(){
//     let greet = "namaste"; //Function Scope
//     console.log(greet);
//     function innergreet(){
//         console.log(greet); //lexical Scope

//     }
//     innergreet();
// }
// console.log(greet);
// changegreet();



// Function Expressions - usko bolte hai jisme function ko ek variable me dal diya jata hai jese is me hua ha function ko sum ke ander daal diya ha. toh jab bhi hame function call krna hoga toh ham sum ko call karenge na ki function ko.

let sum = function (a, b) {
    return a + b;
}

sum(1, 2);



// Higher Order function.

// function multiplegreet(func, count) { //Higher order function.
//     for (let i = 1; i <= count; i++) {
//         func();
//     }
// }

// let greet = function () {
//     console.log("hello");
// }

// multiplegreet(greet, 4);



// Higher Order function (Return).

// let odd = function (n) {
//     console.log(!(n % 2 == 0));
// }

// let even = function (n) {
//     console.log(n % 2 == 0);
// }



// function oddOrEvenFactory(request) {
//     if (request == "odd") {
//         let odd = function (n) {
//             console.log(!(n % 2 == 0));
//         }


//         return odd;
//     } else if (request == "even") {
//         let even = function (n) {
//             console.log(n % 2 == 0);
//         }

//         return even;
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = "odd"; //even;




// Methods
const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }

};