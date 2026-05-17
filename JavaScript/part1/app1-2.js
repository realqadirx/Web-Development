//Conditional Statements
//IF
// let age = 18;
// if(age >= 18){
//     console.log(`Age of the candidate = ${age * 1}`); 
//     console.log("You can vote");
//     console.log("You can drive");
// }else {
//     console.log(`Age of the candidate = ${age * 1}`); 
//     console.log("You can not vote");
//     console.log("You can not drive");
// }


//Create a traffic light system that shows what to do based on color.
// let color = "red";
// if (color === "red") {
//     console.log("Stop! light color is red")
// }else if (color === "yellow") {
//     console.log("Slow down! light color is yellow")
// }else if (color === "green") {
//     console.log("Go! light color is green")
// }else{
//     console.log("Traffic light is not working!");
// }

//School Grading marks system
// let marks = 75;
// if (marks >= 90) {
//     console.log("Grade - A+");
// } else if (marks >= 80) {
//     console.log("Grade - A");
// } else if (marks >= 70) {
//     console.log("Grade - B+");
// } else if (marks >= 60) {
//     console.log("Grade - B");
// } else if (marks >= 50) {
//     console.log("Grade - C+");
// } else if (marks >= 40) {
//     console.log("Grade - C");
// } else if (marks >= 33) {
//     console.log("Grade - D");
// } else if (marks <= 32) {
//     console.log("Fail");
// }

//Create a system to calculate popcorn prices based on the size customer asked for: 
// let size = "S";
// if(size == "XL"){
//     console.log("Price : Rs. 250");
// } else if(size == "L"){
//     console.log("Price : Rs.200");
// } else if(size == "M"){
//     console.log("Price : Rs.100");
// } else if(size == "S"){
//     console.log("Price : Rs.50");
// } else {
//     console.log("Sorry! size does not exist.");
// }

//Nested is-else
// let marks = 33;
// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("Grade : O");
//     } else {
//         console.log("Grade : A");
//     }
// } else {
//     console.log("Better luck next time!");
// }


//Logical oprerators
//Logical OR
// let marks = 33;
// if(marks >= 33 || marks >= 80){
//     console.log("Pass");
//     console.log("A+");
// }else{
//     console.log("Fail");
// }


//Logical NOT
// let marks = 33;
// if(!(marks <= 33)){
//     console.log("Pass");
// }else {
//     console.log("Fail");
// }


//Ques: A "good string" is a string that start with the letter "a" & has a length > 3. write a program to find if a string is good or not.
// let str = "amazon";
// if( (str[0] === "a") && (str.length >= 3)) {
//     console.log("It is a good string.");
// }else {
//     console.log("It is not a good string.");
// }

//Predict the output of the following code:
// let num = 12;
// if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))){
//     console.log("safe");
// }else {
//     console.log("Unsafe");
// }


//Switch statement;
// let color = "green";

// switch (color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("light is broken");
// }

// console.log("after switch statement");


// Use switch statement to print the day of the week using a number variables "day" with value 1 to 7.
// let day = 7;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday, fun day");
//         break;
//     default:
//         console.log("Not a valid day");
// }


//Alert & Prompt
//Alert
// console.log("This is a simple log!");
// console.error("This is a simple error message!");
// console.warn("This is a  warning message!");

//Prompt
// let roll = prompt("Enter your roll number : ");
// console.log(roll);

// let firstName = prompt("Enter first name");
// let lastName = prompt("Enter last name");
// console.log(`Full name is : ${firstName + " " + lastName}`);


// Create a number variable num with some value. Now, print "Good" if the number is divisible by 10 nad print "Bad" if it it not.

// let num = 10;
// if (num % 10 === 0) {
//     console.log("Good");
// } else {
//     console.log("Bad");
// }

// Take the user's name & age as input using prompt. Then return back following statement to the user as alert (by subsituting their name & age):
// Name is age years old. (use template literals to print this sentence)

// let Name = prompt("Enter your name");
// let Age = prompt("Enter your age");
// console.log(`${Name} is ${Age} years old.`);



// let Quarter = 1;
// switch (Quarter) {
//     case 1:
//         console.log("Janunary, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("Not a vaild Quarter!")
// }



// A string is a "golden string" if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5. For a given string print if it is "golden" or "not".

// let str = "amazon";
// if ((str[0] == "a") && (str.length >= 5)) {
//     console.log("Golden string.");
// } else{
//     console.log("Not a golden string.")
// }

//Write a program to find the largest of 3 numbers.
// let a = 5;
// let b = 18;
// let c = 19;
// if (a > b) {
//     if (a > c) {
//         console.log(a, "is largest");
//     } else {
//         console.log(c, "is largest");
//     }
// } else {
//     if (b > c) {
//         console.log(b, "is largest");
//     } else {
//         console.log(c, "is largest");
//     }
// }
// Write a program to check if 2 number have the same last digit.
// let num1 = 32;
// let num2 = 47852;

// if ((num1 % 10) == (num2 % 10)) {
//     console.log("numbers have the same last digit which is", num1 % 10);
// } else {
//     console.log("number don't have the same last digit");
// }