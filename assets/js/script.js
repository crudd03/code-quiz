let questionTextEl = document.querySelector(".questionText");
let buttonListEl = document.querySelector(".answerButtons");
let questionNumber = 0;
let ansButton;

let instructions = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"

let myQuestions = [
    {
        question: "Commonly used data types DO NOT include",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: 'c'
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parentheses",
            d: "square brackets"
        }, 
        correctAnswer: 'c'
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: 'd'
    },
    {
        question: "String variables must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parentheses"
        },
        correctAnswer: 'd'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "Javascript",
            b: "terminal/bash",
            c: "for loops",
            d: "console log"
        },
        correctAnswer: 'd'
    }
]

// Creation of instructions and Start button, set starting question

questionTextEl.textContent = instructions;
let startButtonEl = document.createElement("button");
buttonListEl.appendChild(startButtonEl);
startButtonEl.textContent = "Start";


//Start Quiz

startButtonEl.addEventListener("click", renderQuestion);

// Start Quiz with first question
function renderQuestion() {
        
        questionTextEl.textContent = myQuestions[questionNumber].question;
        buttonListEl.removeChild(startButtonEl);

        for (letter in myQuestions[questionNumber].answers) {
            ansButton = document.createElement("button");
            ansButton.setAttribute("data-letter", letter);
            ansButton.textContent = (letter + ": " + myQuestions[questionNumber].answers[letter]);
            buttonListEl.append(ansButton);
        }
        // Listen for answer
        // checkAnswer();
        // Display correct/incorrect and move on to next question
        // Increment question number by 1
    }

// function checkAnswer() {
    //change buttonlistEl to the event
    buttonListEl.addEventListener("click", function (event) {

        if ($(event.target).attr("data-letter") == myQuestions[questionNumber].correctAnswer) {
            console.log("true");
        } else {
            console.log("false");
        }

    })
// }

// Have more functions, i.e. 'draw new question,' 'submit answer' and call draw new question into submit answer, etc. Also don't forget timer and high score