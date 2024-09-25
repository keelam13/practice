document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("class") === "start-btn") {
                displayQuestion();
            } else {
                checkAnswer();
            }
        })
    }
})

function displayQuestion() {
    
    let body = document.getElementsByTagName('body')[0];

    let img = document.getElementsByTagName("img")[0];
    img.src = "assets/images/rx.png";

    let choicesBtn = document.getElementsByClassName("choices-btn");
    choicesBtn.style.display = "visible";

    if (window.matchMedia("(min-width: 768px)").matches) {
        body.style.flexDirection = "row";
        img.style.width = "50%";
        img.style.height = "50%";
    } else {
        body.style.flexDirection = "column";
        img.style.width = "30%";
        img.style.height = "30%";
    }

    let questions = ["What?", "Where?", "When?", "Who?", "Why?"];
    let question = Math.floor(Math.random() * questions.length);
    let paragraph = document.getElementsByTagName("p")[0];
    paragraph.textContent = `${questions[question]}`;

    let answers = ["Dolor", "Santiago City", "July 3, 2024", "Birthday", "Party"];
    let choices = Math.floor(Math.random() * answers.length);
    



}

function checkAnswer() {

}

function calculateAnswer() {

}

function incrementScore() {

}

function displayBonusQuestion() {
    
}

function multipleChoice () {

}