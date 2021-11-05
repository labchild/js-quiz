// assignment code
// quiz variables for timer, question box El, questions array (of objects)
var timeLeft = 60;
var headerEl = document.querySelector("#header");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");
var questionsArr = [
    {title: "Question 1",
    question: "Question",
    choices: ["right answer", "wrong-1", "wrong-2", "wrong-3"],
    answer: 0
    },
    {title: "Question 2",
    question: "Question",
    choices: ["wrong-1", "right answer", "wrong-2", "wrong-3"],
    answer: 1
    },
    {title: "Question 3",
    question: "Question",
    choices: ["wrong-1", "right answer", "wrong-2", "wrong-3"],
    answer: 1
    },
    {title: "Question 4",
    question: "Question",
    choices: ["wrong-1", "wrong-2", "wrong-3", "right answer"],
    answer: 3
    },
    {title: "Question 5",
    question: "Question",
    choices: ["wrong-1", "wrong-2", "right answer", "wrong-3"],
    answer: 2
    },
];
// page appearance on load
var quizInstructionsEl = document.createElement("div");
var startBtnEl = document.createElement("button");

// function definitions
// timer function
var timer = setInterval(function(){
    if (timeLeft < 1) {
        // go to end game state
        console.log(timeLeft);
        clearInterval(timer);
    } else {
        document.getElementById("countdown").textContent = timeLeft;
    }
}, 1000);

// on load state
var pageLoad = function() {
    // instrucions
    quizInstructionsEl.innerHTML = "<h1 class='title'>JavaScript Quiz</h1><p>directions</p>";
    // start btn
    startBtnEl.className = "btn start-btn";
    startBtnEl.type = "button";
    startBtnEl.textContent = "Start Quiz";
    // append to page
    questionEl.appendChild(quizInstructionsEl);
    answerEl.appendChild(startBtnEl);
}

// start quiz
var startQuiz = function(event) {
    var quizInstructionsEl = 
    // remove insructions & title
    quizInstructionsEl.remove();
    startBtnEl.remove();
    // run quiz & start timer
    playQuiz();
    timer();
}

// play the quiz function
var playQuiz = function(event) {
    var selectedAnswer = event.target;
    var quizQuestionEl = document.createElement("p");
    quizQuestionEl.className = "question";
    questionEl.appendChild(quizQuestionEl);
    // loop through question array to display each question on click
    for (var i = 0; i < questionsArr.length; i++) {

    };

    // if click on wrong answer, subtract 10 sec
    if (selectedAnswer.answer === choices[i]) {
        console.log("You got it right!");
    } else {
        // take 10 sec from timer/score
        timeLeft = timeLeft - 10;
        // move to next q
        return timeLeft;
    };
}

// post questions, deduct time, next question
// end game, enter initials for score stats
// show high scores

// function calls & event listeners
// on load
pageLoad();
// listen for start
answerEl.addEventListener("click", startQuiz);
// listen for questions
// listen for high scores