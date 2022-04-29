/* Variables start here */
let startButton = document.querySelector("#start-button");
let userResult = document.querySelector("#result");
let currentQuestion = document.querySelector("#question");

let currentOption = document.querySelectorAll(".option");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

//  Questions from https://www.interviewbit.com/javascript-mcq/
const Questions = [
    {
        id: 0,
        q: "Javascript is an _______ language?",
        a: [
            {text: "Object-Oriented", isCorrect: true },
            {text: "Object-Based", isCorrect: false },
            {text: "Procedural", isCorrect: false },
            {text: "None of the above", isCorrect: false },
        ]        
    },
    {
        id: 1,
        q: "Which of the following keywords is used to define a variable in Javascript?",
        a: [
            {text: "var", isCorrect: false },
            {text: "let", isCorrect: false },
            {text: "Both A and B", isCorrect: true },
            {text: "None of the above", isCorrect: false },
        ]  
    },
    {
        id: 2,
        q: "Which of the following methods is used to access HTML elements using Javascript?",
        a: [
            {text: "getElementbyId()", isCorrect: false },
            {text: "getElementByClassName()", isCorrect: false },
            {text: "Both A and B", isCorrect: true },
            {text: "None of the above", isCorrect: false },
        ]  
    },
    {
        id: 3,
        q: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        a: [
            {text: "Throws an error", isCorrect: false },
            {text: "Ignores the statements", isCorrect: true },
            {text: "Gives us a warning", isCorrect: false },
            {text: "None of the above", isCorrect: false },
        ]  
    },
    {
        id: 4,
        q: "Which of the following methods can be used to display data in some form using Javascript?",
        a: [
            {text: "document.write()", isCorrect: false },
            {text: "console.log()", isCorrect: false },
            {text: "window.alert()", isCorrect: false },
            {text: "All of the above", isCorrect: true },
        ]  
    },
    {
        id: 5,
        q: "How can a datatype be declared to be a constant type?",
        a: [
            {text: "const", isCorrect: true },
            {text: "var", isCorrect: false },
            {text: "let", isCorrect: false },
            {text: "constant", isCorrect: false },
        ]  
    },
    {
        id: 6,
        q: "What keyword is used to check whether a given property is valid or not?",
        a: [
            {text: "in", isCorrect: true },
            {text: "is in", isCorrect: false },
            {text: "exists", isCorrect: false },
            {text: "lies", isCorrect: false },
        ]  
    },
    {
        id: 7,
        q: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        a: [
            {text: "Boolean", isCorrect: false },
            {text: "Undefined", isCorrect: false },
            {text: "Object", isCorrect: true },
            {text: "Integer", isCorrect: false },
        ]  
    },
    {
        id: 8,
        q: "What does the Javascript “debugger” statement do?",
        a: [
            {text: "It will debug all the errors in the program at runtime", isCorrect: false },
            {text: "It acts as a breakpoint in a program", isCorrect: true },
            {text: "It will debug error in the current statement if any", isCorrect: false },
            {text: "All of the above", isCorrect: false },
        ]  
    },
    {
        id: 9,
        q: "Which function is used to serialize an object into a JSON string in Javascript?",
        a: [
            {text: "stringify()", isCorrect: true },
            {text: "parse()", isCorrect: false },
            {text: "convert()", isCorrect: false },
            {text: "None of the above", isCorrect: false },
        ]  
    },
];

let totalQuestions = Questions.length;
let id = 0;
let selected = "";

/* Variables end here */


/* Functions start here */

startButton.addEventListener("click", start);

function start() {
    console.log("Started");
    startButton.removeEventListener("click", start);
    startButton.addEventListener("click", stop);
    startButton.value = "Stop";
    startButton.innerHTML = "Stop";
    userResult.innerHTML = "That's the spirit!";
    game(id);
}

function stop() {
    console.log("Stopped");
    startButton.removeEventListener("click", stop);
    startButton.addEventListener("click", start);
    startButton.value = "start";
    startButton.innerHTML = "Start"
    userResult.innerHTML = "Giving up eh?"
    id = 0;
}

option1.addEventListener("click", checkAndNext1); 

function checkAndNext1(){
    selected = option1.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
    } else {
        userResult.innerHTML = "Wrong";
    }

    if (id < totalQuestions) {
        id++
        game(id);
    }
}

option2.addEventListener("click", checkAndNext2); 

function checkAndNext2(){
    selected = option2.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
    } else {
        userResult.innerHTML = "Wrong";
    }

    if (id < totalQuestions) {
        id++
        game(id);
    }
}

option3.addEventListener("click", checkAndNext3); 

function checkAndNext3(){
    selected = option3.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
    } else {
        userResult.innerHTML = "Wrong";
    }

    if (id < totalQuestions) {
        id++
        game(id);
    }
}

option4.addEventListener("click", checkAndNext4); 

function checkAndNext4(){
    selected = option4.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
    } else {
        userResult.innerHTML = "Wrong";
    }

    if (id < totalQuestions) {
        id++
        game(id);
    }
}

function game() {
    // Get the values from list
    currentQuestion.innerHTML = Questions[id].q;
    option1.innerHTML = Questions[id].a[0].text;
    option2.innerHTML = Questions[id].a[1].text;
    option3.innerHTML = Questions[id].a[2].text;
    option4.innerHTML = Questions[id].a[3].text;

    option1.value = Questions[id].a[0].isCorrect;
    option2.value = Questions[id].a[1].isCorrect;
    option3.value = Questions[id].a[2].isCorrect;
    option4.value = Questions[id].a[3].isCorrect;

}


// function quizGame(id) {
//     question.innerHTML = Questions[id].q;
//     option1.innerHTML = Questions[id].a[0].text;
//     option2.innerHTML = Questions[id].a[1].text;
//     option3.innerHTML = Questions[id].a[2].text;
//     option4.innerHTML = Questions[id].a[3].text;

//     option1.value = Questions[id].a[0].isCorrect;
//     option2.value = Questions[id].a[1].isCorrect;
//     option3.value = Questions[id].a[2].isCorrect;
//     option4.value = Questions[id].a[3].isCorrect;

//     option1.addEventListener("click", function(){
//         selected = option1.value;
//     })

//     option2.addEventListener("click", function(){
//         selected = option2.value;
//     })

//     option3.addEventListener("click", function(){
//         selected = option3.value;
//     })

//     option4.addEventListener("click", function(){
//         selected = option4.value;
//     })



//     // Evaluate method
//     evaluate[0].addEventListener("click", () => {
//         if (selected == "true") {
//             result[0].innerHTML = "Correct";
//             result[0].style.color = "green";
//         } else {
//             result[0].innerHTML = "Wrong";
//             result[0].style.color = "red";
//         } 
//         // start = false;
//     })
// }

// if (start) {
//     iterate("0");
// }
  
// // Next button and method
  
// next.addEventListener("click", () => {
    
//     if (id < Questions.length) {
//         id++;
//         iterate(id);
//         console.log(id);
//     }
// });
