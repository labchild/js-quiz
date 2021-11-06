// assignment code
// quiz variables for timer, question box El, questions array (of objects)
var timeLeft = 60;
var questionCount = 0;
var gradeTime = 2;
var scoreKeeper = 0;

var headerEl = document.querySelector("#header");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");
var bottomEl = document.querySelector("#bottom");
var quizEl = document.querySelector(".quiz")
var highScoreArr = [];
var questionsArr = [
    {
        question: "Which HTML element do you use to link to a JavaScript file?",
        answers: [
            { text: "<js>", correct: false },
            { text: "<link>", correct: false },
            { text: "<script>", correct: true },
            { text: "<href>", correct: false }
        ]
    },
    {
        question: 'How do you create an alert that reads "Let\'s learn JavaScript!"',
        answers: [
            { text: 'alert("Let\'s learn JavaScript!")', correct: true },
            { text: 'alertBox("Let\'s learn JavaScript!")', correct: false },
            { text: 'window.alert = "Let\'s learn JavaScript!"', correct: false },
            { text: "alert(Let's learn Javascript!)", correct: false }
        ]
    },
    {
        question: "How do you call a function called myFunction?",
        answers: [
            { text: "call myFunction()", correct: false },
            { text: "myFunction", correct: false },
            { text: "call function myFunction", correct: false },
            { text: "myFunction()", correct: true }
        ]
    },
    {
        question: "How does a while loop start?",
        answers: [
            { text: "while (i <= 10)", correct: true },
            { text: "while i <= 10", correct: false },
            { text: "while i = 1 => 10", correct: false },
            { text: "while (i <= 10; i++)", correct: false }
        ]
    },
    {
        question: "How do you add a comment in JavaScript?",
        answers: [
            { text: "<!-- This is a comment -->", correct: false },
            { text: "$(This is a comment)", correct: false },
            { text: "// This is a comment", correct: true },
            { text: "'This is a comment'", correct: false }
        ]
    },
];

function correct() {

}
// page appearance on load
var quizInstructionsEl = document.createElement("div");


var pageLoad = function () {
    // instrucions
    quizInstructionsEl.innerHTML =
        "<h1 class='title'>JavaScript Quiz</h1><p>Test your knowledge of basic JavaScript terms!<br>" +
        "You have 60 seconds to answer 5 questions. Watch out! Each wrong answer will knock 10 seconds off the clock.</p>";
    // start btn
    var startBtnEl = document.createElement("button");
    startBtnEl.className = "btn start-btn";
    startBtnEl.type = "button";
    startBtnEl.textContent = "Start Quiz";
    // append to page
    questionEl.appendChild(quizInstructionsEl);
    bottomEl.appendChild(startBtnEl);
}

// start button is clicked, quiz div clears and questions begin
var startQuiz = function (event) {
    var isStart = event.target;
    if (isStart.matches(".start-btn")) {
        bottomEl.innerHTML = "";
        showQuestion();
    }
}

var showQuestion = function () {

    questionEl.innerHTML = "";
    answerEl.innerHTML = "";

    // if question count < questionsArr.length, else endGame
    if (questionCount < questionsArr.length) {
        // populate quiz div with object info from questionsArr
        var questionText = document.createElement("h2");
        questionText.className = "questions";
        questionText.innerText = questionsArr[questionCount].question;
        questionEl.appendChild(questionText);
        questionsArr[questionCount].answers.forEach(answer => {
            const answerBtn = document.createElement("buttton");
            answerBtn.innerText = answer.text;
            answerBtn.className = "answer-btn btn";
            answerBtn.dataset.correct = answer.correct
            // append to answers div
            answerEl.appendChild(answerBtn);
        })
    } else {
        endGame();
    }
}

// select answer
var isAnswer = function (event) {
    debugger;
    var selectedAnswer = event.target.getAttribute("data-correct");
    // if click is true display Correct!
    if (JSON.parse(selectedAnswer)) {
        // +10 to score keeper
        scoreKeeper += 10;
        // display Correct!
        var grade = document.createElement("h3");
        grade.className = "grade grade-true";
        grade.textContent = "Correct!";
        bottomEl.appendChild(grade);
        // display grade for 1 sec
        setTimeout(() => {
            bottomEl.remove()
        }, 1000);
    }
    // if click is false display Wrong! then clear div
    else if (!JSON.parse(selectedAnswer)) {
        // -10 to timeLeft
        timeLeft -= 10;
        var grade = document.createElement("h3");
        grade.className = "grade grade-false";
        grade.textContent = "Incorrect!";
        bottomEl.appendChild(grade);
        // display grade for 1 sec
        setTimeout(() => {
            bottomEl.remove()
        }, 1000);
    }
    console.log(scoreKeeper);
    console.log(timeLeft);
    questionCount++;
    showQuestion();
}

// end game, clear div, call high scores
var endGame = function () {
    questionEl.innerHTML = "";
    answerEl.innerHTML = "";
    bottomEl.innerHTML = "";

    saveHighScores();
}

// get user info & show high scores
var saveHighScores = function () {
    // get user info, save to storage
    var userObj = {
        name: prompt("You scored" + scoreKeeper + "! Enter your initials to save your high score."),
        score: scoreKeeper
    }

    highScoreArr.push(userObj);
    localStorage.setItem("highScores", JSON.stringify(highScoreArr));
    showHighScores();
}

// print high scores title and info to page
var showHighScores = function () {
    var scoreTitleEl = document.createElement("h1");
    scoreTitleEl.className = "title";
    scoreTitleEl.textContent = "High Scores";
    questionEl.appendChild(scoreTitleEl);

    var highScoreListEl = document.createElement("ul");
    highScoreListEl.className = "score-list";
    answerEl.appendChild(highScoreListEl);

    var playBtnEl = document.createElement("button");
    playBtnEl.className = "btn play-again";
    playBtnEl.id = "play-again";
    playBtnEl.textContent = "Try Again?"
    bottomEl.appendChild(playBtnEl);

    var highScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(highScores);
    // loop to fill list with data from storage obj
    highScores.forEach(score => {
        const scoreListItem = document.createElement("li");
        scoreListItem.className = "flex-row"
        scoreListItem.innerHTML = 
        "<p class='user-name'>" + score.name + "</p><p class='user-score'>" + score.score + "</p>";
        // append to high scores ul el
        highScoreListEl.appendChild(scoreListItem);
    });
}

// print a button 'play again?' that runs page load
var playAgain = function (event) {
    var isPlayAgain = event.target;
    if (isPlayAgain.matches("#play-again")) {
        questionEl.innerHTML = "";
        answerEl.innerHTML = "";
        bottomEl.innerHTML = "";
        pageLoad();
    }
}

// timer function
// set interval while time left > 0, timeleft = -1 every second
// print time left to countdown
// if time left <= 0, endGame

pageLoad();
// click start
bottomEl.addEventListener("click", startQuiz);
// click quiz answers
answerEl.addEventListener("click", isAnswer);
// play again
bottomEl.addEventListener("click", playAgain);