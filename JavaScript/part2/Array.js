// let student1 = "qadir";
// let student2 = "kritika";
// let student3 = "jack";

// let students = ["kritika" , "qadir" , "jack" , "saad"];
// console.log(students[0]);
// console.log(students.length);

// let fruit = ["mango","apple","litchi"];
// console.log(fruit);


//Array methods : Push - add to end (piche se add krne ke liye use hota hai).
// let cars = ["Audi","BMW","Maruti","XUV"];

// Assignment Questions
// Qs1. write a JS program to get the first n elements of an array.[n can be any positive number].
// For example: for array = [7, 9, 0, -2]; and n = 3;
// print = [7, 9, 0]

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.splice(0, n);
// console.log(ans);



// Qs2. write a JS program to get the last n elements of an array.[n can be any positive number].
// For example: for array = [7, 9, 0, -2]; and n = 3;
// print = [9, 0, -2];

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(arr.length-n);
// console.log(ans);



// Qs3. Write a JavaScript program to check whether a string is blank or not.

// let str = prompt("Enter you string");
// if(str == 0){
//     console.log(`This string is blank : ${str}`);
// } else {
//     console.log(`This string is not blank : ${str}`);
// }



// Qs4.Write a JavaScript program to test whether the character at the given (character)index is lower case.

// let char = "RealQadirx";
// let ind = 0;
// if (char[ind] == char[ind].toLowerCase()) {
//     console.log("This character is lower case");
// } else {
//     console.log("This character is upper case");
// }

// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.

// let Name = prompt("Please enter you name");
// console.log(`Name without trim : ${Name}`)
// console.log(`Name with trim : ${Name.trim()}`);



// Qs6. Write  aJavaScript program to check if an element exists in an array or not.

// let arr = ["hello", "a", 23, 64, 99, -6];
// let item = "hello";
// if (arr.indexOf(item) != -1) {
//     console.log("String exists in array");
// } else {
//     console.log("string doesn't exists in array");
// }


// let some = prompt("Type for upper case");
// console.log(some.toUpperCase());

let arr = ["hello", "a", 23, 64, 99, -6];
let item = 23;

if (arr.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element doesn't on exist in array");
}



