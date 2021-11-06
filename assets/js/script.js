// assignment code
// quiz variables for timer, question box El, questions array (of objects)
var timeLeft = 60;
var headerEl = document.querySelector("#header");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");
var bottomEl = document.querySelector("#bottom");
var questionsArr = [
    {
        question: "Question",
        answers: [
            { text: "right answer", correct: true },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false }
        ]
    },
    {
        question: "Question2",
        answers: [
            { text: "right answer", correct: true },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false }
        ]
    },
    {
        question: "Question3",
        answers: [
            { text: "right answer", correct: true },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false }
        ]
    },
    {
        question: "Question4",
        answers: [
            { text: "right answer", correct: true },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false }
        ]
    },
    {
        question: "Question5",
        answers: [
            { text: "right answer", correct: true },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false },
            { text: "wrong-1", correct: false }
        ]
    },
];
// page appearance on load
var quizInstructionsEl = document.createElement("div");
var startBtnEl = document.createElement("button");

// function definitions
// on load state
var pageLoad = function () {
    // instrucions
    quizInstructionsEl.innerHTML = "<h1 class='title'>JavaScript Quiz</h1><p>directions</p>";
    // start btn
    startBtnEl.className = "btn start-btn";
    startBtnEl.type = "button";
    startBtnEl.textContent = "Start Quiz";
    // append to page
    questionEl.appendChild(quizInstructionsEl);
    bottomEl.appendChild(startBtnEl);
}

// start quiz
var startQuiz = function (event) {
    var isStart = event.target;
    // remove insructions & title
    if (isStart.matches(".start-btn")) {
        quizInstructionsEl.remove();
        startBtnEl.remove();
        // run quiz & start timer
        playQuiz();
    }
}

// cycle questions
var cycleQuestions = function (event) {
    var selectedAnswer = event.target;

    // if (event target text content === this object's property answer)
    if (selectedAnswer.textContent === /* the object currently populating text */.answer) {
        // move on to next quetion
    } else if ()
    // or possibly questionsArr.indexOf(selectedAnswer)

}
// play the quiz function
var playQuiz = function () {
    console.log("you started the quiz!");

    // print question to page
    var quizQuestionEl = document.createElement("p");
    quizQuestionEl.className = "question";
    questionEl.appendChild(quizQuestionEl);

    // print answer choices to page
    var choiceA = document.createElement("button");
    var choiceB = document.createElement("button");
    var choiceC = document.createElement("button");
    var choiceD = document.createElement("button");
    choiceA.className = "answer";
    choiceB.className = "answer";
    choiceC.className = "answer";
    choiceD.className = "answer";
    choiceA.type = "button";
    choiceB.type = "button";
    choiceC.type = "button";
    choiceD.type = "button";
    answerEl.appendChild(choiceA);
    answerEl.appendChild(choiceB);
    answerEl.appendChild(choiceC);
    answerEl.appendChild(choiceD);

    //let the user know if they got it right or wrong
    var evaluateAnswer = document.createElement("h2");
    evaluateAnswer.className = "evaluate";
    bottomEl.appendChild(evaluateAnswer);

    // loop through question array to display each question on click
    for (var i = 0; i < questionsArr.length; i++) {
        // display first question with choices
        quizQuestionEl.textContent = questionsArr[i].question;
        choiceA.textContent = questionsArr[i].choices[0];
        choiceB.textContent = questionsArr[i].choices[1];
        choiceC.textContent = questionsArr[i].choices[2];
        choiceD.textContent = questionsArr[i].choices[3];

        // if click on wrong answer, subtract 10 sec
        /* if (selectedAnswer.answer === choices[i]) {
            console.log("You got it right!");
            
            // move on to next q
        } else {
            console.log("You got it wrong!");
            // take 10 sec from timer/score
            timeLeft = timeLeft - 10;
            // move to next q
            return timeLeft;
        }; */
    }
}

// post questions, deduct time, next question
// end game, enter initials for score stats
// show high scores

// function calls & event listeners
// on load
pageLoad();
// listen for start
answerEl.addEventListener("click", cycleQuestions);
bottomEl.addEventListener("click", startQuiz);
// listen for questions

// listen for high scores