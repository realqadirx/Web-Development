const student = {
    name: "Qadir",
    marks: 95,
    prop: this,  //Global scope.
    getName: function () {
        console.log(this);
        return this.name;
    },

    getMarks: () => {
        console.log(this); //parent's scope.
        return this.marks;
    }
};





// Practice question.
// Ques1. Write an arrow function that return the square pf a number 'n'.

const square = (n) => {
    return n*n;
}

square(3);



// Ques2. Write a function that print "hello world" 5 time at interval of 2s each.
let id = setInterval(() => {
    console.log("hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval run");
}, 10000);