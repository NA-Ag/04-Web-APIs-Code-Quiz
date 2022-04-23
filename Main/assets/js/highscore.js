// get the elements
var resetButton = document.querySelector(".reset-button");
var listEl = document.querySelector(".highscore-list-container");
var buttonContainer = document.querySelector(".button-container");



if (resetButton) {
    resetButton.addEventListener("click", function () {
        localStorage.setItem("userScores", null);

        // remove ul and li elements
        var ul = document.querySelector("#highscore-list");
        listEl.removeChild(ul);
        // also remove clear highscores
        buttonContainer.removeChild(resetButton);
    });
};

window.onload = loadScores();

function loadScores() {
    
    var ul = document.createElement("ul");
    ul.setAttribute("id", "highscore-list");
    ul.setAttribute("style", "text-align: left;")
    listEl.appendChild(ul);

    var userScores = JSON.parse(localStorage.getItem("userScores"));
    
    //  read each array and get its name and score
    if (userScores !== null) {
        userScores.forEach((element, index) => {
            li = document.createElement("li");
            listClass = index + 1;
            li.setAttribute("class", "li-" + listClass);
            li.textContent = listClass + ". " + element.name + " - " + element.score;
            ul.appendChild(li);    
        });        
    } else {
        buttonContainer.removeChild(resetButton);
    }
}