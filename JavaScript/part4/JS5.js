// const student = {
//     name: "Qadir",
//     age: 20,
//     mark: 64.4,
//     city: "delhi"
// };


// const item = {
//     price: 100.99,
//     discount: 50,
//     colors: ["red", "pink"]
// };

// Pushing a value in constant object in js by the references.
// Example 1
// const obj = {
//     name: "Qadir",
//     skills: ["js","React"]
// };
// console.log(obj);

// obj.skills.push("Node.js");
// console.log(obj);


// Example 2.
// const obj2 = { name: "Qadir" };
// obj2.age = 20;

// console.log(obj2); 


// Create an object literal for the properties of therd / twitter post.
// const post = {
//     username: "@realqadirx",
//     content: "#gymnastic",
//     likes: "1M",
//     reposts: 1000,
//     tags: ["@kritika","@jackson","@aman"]
// };


// Conversion in get values.

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };


// ADD / UPDATE value in object litrel.
// const student = {
//     name: "Qadir",
//     age: 20,
//     mark: 64.4,
//     city: "delhi"
// }

// student.city = "mumbai";
// student.mark = "A"
// student.gender = "male";
// console.log(student);




// object of objects
// const classInfo = {
//     qadir: {
//         name: "qadir",
//         grade: "B",
//         city: "Delhi",
//     },
//     kritika: {
//         name: "kritika",
//         grade: "A+",
//         city: "Pune",
//     },
//     jackson: {
//         name: "jackson",
//         grade: "A",
//         city: "Mumbai"
//     }
// }



// Array of objects.
// const classInfo = [
//     {
//         name: "kritika",
//         grade: "A+",
//         city: "Delhi",
//     },
//     {
//         name: "Qadir",
//         grade: "A", 
//         city: "Pune",
//     },
//     {
//         name: "Jackson",
//         grade: "O",
//         city: "Mumbai",
//     }
// ];

// Gererate a random number between 1 to 100.
// let rand1 = Math.floor(Math.random() * 100) + 1;
// console.log(rand1);



// Gererate a random number between 1 to 5.
// let rand2 = Math.floor(Math.random() * 5) + 1;
// console.log(rand2);


// Guessing Game
// User enter a max number & then tries to gusse a random generated number between 1 to max.

// const max = prompt("Enter the maximun number");

// const rand = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");
// while (true) {
//     if (guess == "quit") {
//         console.log("Your are quit the game");
//         break;
//     }

//     if (guess == rand) {
//         console.log("Your are right! congrats!! random number was", rand);
//         break;
//     } else if (guess < rand) {
//         guess = prompt("Hint: your guess to small. please try again");
//     } else {
//         guess = prompt("Hint: Your number is too large. please try again");
//     }

// }


