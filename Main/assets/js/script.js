let result = document.querySelectorAll(".result");
const evaluate = document.querySelectorAll(".evaluate");

const question = document.querySelector("#question");  
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

let selected = "";
let start = true;

//Questions from https://www.interviewbit.com/javascript-mcq/
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

// Set start

  
// Iterate
function iterate(id) {

    // The result section will change based on what answer the player gets. 
    // Grabs the first element of result (i.e wrong or correct) and empty it. 
    result[0].innerText = "";

    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Setting option text 
    option1.innerText = Questions[id].a[0].text;
    option2.innerText = Questions[id].a[1].text;
    option3.innerText = Questions[id].a[2].text;
    option4.innerText = Questions[id].a[3].text;
  
    // Setting the true or false value to the options
    option1.value = Questions[id].a[0].isCorrect;
    option2.value = Questions[id].a[1].isCorrect;
    option3.value = Questions[id].a[2].isCorrect;
    option4.value = Questions[id].a[3].isCorrect;
  
  
    // User selection options
    option1.addEventListener("click", () => {
        selected = option1.value;
    })
  
    option2.addEventListener("click", () => {
        selected = option2.value;
    })
  
    option3.addEventListener("click", () => {
        selected = option3.value;
    })
  
    option4.addEventListener("click", () => {
        selected = option4.value;
    })
  
    // Grabbing the evaluate button
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Correct";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Wrong";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < Questions.length) {
        id++;
        iterate(id);
        console.log(id);
    }
});