/* Variables start here */

// Game Variables
let startButton = document.querySelector("#start-button");
let userResult = document.querySelector("#result");
let currentQuestion = document.querySelector("#question");
let scoreNow = document.querySelector("#currentScore");
let timeLeft = document.querySelector("#timer");
let currentOption = document.querySelectorAll(".option");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

// Score Variables
let userInput = document.querySelector("#user-text");
let userForm = document.querySelector("#user-form");
let userList = document.querySelector("#user-list");
let clearUsers = document.querySelector("#reset-button");
let getHighscores = document.querySelector("#highscore");

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

let users = [];

let totalQuestions = Questions.length;
let id = 0;
let selected = "";
let score = 0;
let count;
let counter;
let finished = false;


/* Variables end here */


/* Functions start here */

// Game functions here
option1.disabled = true;
option2.disabled = true;
option3.disabled = true;
option4.disabled = true;

startButton.addEventListener("click", start);

function start() {
    console.log("Started");
    startButton.removeEventListener("click", start);
    startButton.addEventListener("click", stop);
    startButton.value = "Stop";
    startButton.innerHTML = "Stop";
    userResult.innerHTML = "That's the spirit!";
    userResult.style.color = "white";
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;
    score = 0;
    counter = setInterval(timer, 1000);
    count = 100;
    game(id);
    timer();
}

function stop() {
    console.log("Stopped");
    startButton.removeEventListener("click", stop);
    startButton.addEventListener("click", start);
    startButton.value = "start";
    startButton.innerHTML = "Start";
    userResult.innerHTML = "Giving up eh?";
    userResult.style.color = "white";
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    clearInterval(counter);
    id = 0;
}

function reset (){
    id = 0;
    score = 0;
    startButton.removeEventListener("click", stop);
    startButton.addEventListener("click", start);
    startButton.value = "start";
    startButton.innerHTML = "Start";
    count = 100;
    timeLeft.innerHTML = 100;
}

function gameOver() {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    userResult.innerHTML = "Thanks for playing!";
    userResult.style.color = "gold";
    reset();
        
}

option1.addEventListener("click", checkAndNext1); 

function checkAndNext1(){
    selected = option1.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
        userResult.style.color = "green";
        score += 10;
    } else {
        userResult.innerHTML = "Wrong";
        userResult.style.color = "red";
        count -= 10;
    }

    if (id < totalQuestions) {
        id++
        game(id);
    } else if (id == totalQuestions) {
        gameOver();
        finished = true;
    }
}

option2.addEventListener("click", checkAndNext2); 

function checkAndNext2(){
    selected = option2.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
        userResult.style.color = "green";
        score += 10;
    } else {
        userResult.innerHTML = "Wrong";
        userResult.style.color = "red";
        count -= 10;
    }

    if (id < totalQuestions) {
        id++
        game(id);
    } else if (id == totalQuestions) {
        gameOver();
        finished = true;
    }
}

option3.addEventListener("click", checkAndNext3); 

function checkAndNext3(){
    selected = option3.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
        userResult.style.color = "green";
        score += 10;
    } else {
        userResult.innerHTML = "Wrong";
        userResult.style.color = "red";
        count -= 10;
    }
    if (id < totalQuestions) {
        id++
        game(id);
    } else if (id == totalQuestions) {
        gameOver();
        finished = true;
    }
}

option4.addEventListener("click", checkAndNext4); 

function checkAndNext4(){
    selected = option4.value;
    if (selected == "true") {
        userResult.innerHTML = "Correct";
        userResult.style.color = "green";
        score += 10;
    } else {
        userResult.innerHTML = "Wrong";
        userResult.style.color = "red";
        count -= 10;
    }

    if (id < totalQuestions) {
        id++
        game(id);
    } else if (id == totalQuestions) {
        gameOver();
        finished = true;
    }
}



function game() {
    currentQuestion.innerHTML = Questions[id].q;
    option1.innerHTML = Questions[id].a[0].text;
    option2.innerHTML = Questions[id].a[1].text;
    option3.innerHTML = Questions[id].a[2].text;
    option4.innerHTML = Questions[id].a[3].text;

    option1.value = Questions[id].a[0].isCorrect;
    option2.value = Questions[id].a[1].isCorrect;
    option3.value = Questions[id].a[2].isCorrect;
    option4.value = Questions[id].a[3].isCorrect;

    scoreNow.innerHTML = score;
}

function timer()
{
  count=count-1;
  if (count < 0)
  {
      clearInterval(counter);
      option1.disabled = true;
      option2.disabled = true;
      option3.disabled = true;
      option4.disabled = true;
      reset();
      return;
  } else if (finished) {
      return;
  }

  timeLeft.innerHTML = count;
}
// End of Game functions

// Highscore functions start here

function renderUsers() {
    userList.innerHTML = "";
    for (var i = 0; i < users.length; i++) {
      let user = users[i];
      let li = document.createElement("li");
      li.textContent = user;
      li.setAttribute("data-index", i);
      userList.appendChild(li);
    }
  }
  
  // This function is being called below and will run when the page loads.
  function init() {
      // Get stored todos from localStorage
      let storedUsers = JSON.parse(localStorage.getItem("users"));
      // If todos were retrieved from localStorage, update the todos array to it
      if (storedUsers !== null) {
          users = storedUsers;
        }
        // This is a helper function that will render todos to the DOM
        // renderUsers();
    }
    
    
    function storeUsers() {
        localStorage.setItem("users", JSON.stringify(users));
    }
    
    userForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let userText = "NAME: " + userInput.value.trim() + " SCORE: " + scoreNow.innerText;
        if (userText === "") {
            return;
        }
        users.push(userText);
        userInput.value = "";
        storeUsers();
    });
        
    getHighscores.addEventListener("click", renderUsers);
    
    clearUsers.addEventListener("click", function(event) {
        let element = event.target;
        if (element.matches("button") === true) {
            let index = element.parentElement.getAttribute("data-index");
            users.splice(index, users.length); 
            storeUsers();
        }
    });
    
    
    init()
    


/* Functions end here */
