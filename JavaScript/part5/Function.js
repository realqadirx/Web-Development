// function hello() {
//     console.log("hello");
// }
// hello();



// function printName() {
//     ;
//     console.log("Qadir raza");
//     console.log("kritika");
//     console.log("jackson");
// }
// printName();


// function print1to5() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }

// print1to5();



// This function is find you are adult or not.
// function isAdult() {
//     let age = prompt("Enter your age to find out you are adult or not");
//     if (age >= 18) {
//         console.log("Yes! you are adult");
//     } else {
//         console.log("sorry! you are not adlut");
//     }
// }
// isAdult();



// Create a function that prints a poem

// function printPeom(){
//     console.log("Twinkle twinkle little star.");
//     console.log("How I wonder what you are.");
//     console.log("Up above the world so high."); 
//     console.log("Like a diamond in the sky."); 
//     console.log("Twinkle twinkle little star.");
//     console.log("How I wonder what you are.");
// }
// printPeom();


// create a funtion to roll a dice & always the value of the dice (1 to 6);

// function rollDice(){
//     let rollDice = Math.floor(Math.random() * 6) + 1;
//     console.log(rollDice);
// }

// rollDice();

// print name & age function.
// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo("Qadir raza", 20);
// printInfo("kritika", 21);

// function sum(a, b){
//     console.log(a+b);
// }
// sum(1, 4);
// sum(5, 4);


// Create a function that give us the average of 3 numbers.
// function calAve(a, b, c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// calAve(15,78,65);


// Create a function that prints the multiplication table of a number.

// function printTable(n){
//     for(let i=n; i <= n*10; i+=n){
//         console.log(i);
//     }

// }
// printTable(2);
// console.log("print the table 7");
// printTable(7);



let str = ["Qadir", "is", "a","nice","guy"];

function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concat(str));
