document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", function () {
        let img = document.getElementsByTagName("img")[0];
        img.src = "assets/images/rx.png";
        img.style.maxWidth = "20%";
        img.style.maxHeight = "20%";

        let paragraph = document.getElementsByTagName("p")[0];
        paragraph.style.width = "50%";
        paragraph.style.textAlign = "left";
                
        button.textContent = "Submit answer"

        displayQuestion();
    });
});

function displayQuestion() {

    let questions = ["What?", "Where?", "When?", "Who?", "Why?"];
    let question = Math.floor(Math.random() * questions.length);
    
    document.getElementsByTagName("p").textContent = `${questions[question]}`;

}
    

function questionaire() {
    
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

    let answers = ["Dolor", "Santiago City", "July 3, 2024", "Birthday", "Party"];
    let choices = Math.floor(Math.random() * answers.length);
}