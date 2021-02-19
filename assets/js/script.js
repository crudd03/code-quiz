let questionTextEl = document.querySelector(".questionText");
let buttonListEl = document.querySelector(".answerButtons");
let startButtonEl = document.querySelector(".startButton")
let startButton = document.createElement("button");
let correctText = document.querySelector(".correctText");
let timer = document.querySelector(".timer");
let questionNumber = 0;
let ansButton;
let secondsLeft = 75;

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
function renderInstructions() {
    questionTextEl.textContent = instructions;
    startButtonEl.appendChild(startButton);
    startButton.textContent = "Start";
}

renderInstructions();

//Start Quiz
startButton.addEventListener("click", renderFirstQuestion);

function renderFirstQuestion() {
    startButtonEl.removeChild(startButton);
    renderQuestion();
    setTime();
}

// Render question function
function renderQuestion() {
        
        questionTextEl.textContent = myQuestions[questionNumber].question;

        for (letter in myQuestions[questionNumber].answers) {
            ansButton = document.createElement("button");
            ansButton.setAttribute("data-letter", letter);
            ansButton.textContent = (letter + ": " + myQuestions[questionNumber].answers[letter]);
            buttonListEl.appendChild(ansButton);
        }
    }

// Event listener for created buttons

    buttonListEl.addEventListener("click", function (event) {
        let correctText = document.createElement("p");

        if ($(event.target).attr("data-letter") == myQuestions[questionNumber].correctAnswer) {
            console.log("true");
            correctText.textContent = "Correct!";
        } else {
            console.log("false");
            correctText.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 10;
        }
        // Removes buttons before generating next ones
        for (letter in myQuestions[questionNumber].answers) {
            // buttonListEl.removeChild(ansButton);
        }

        questionNumber++;
        renderQuestion();

    })

// Timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Timer: " + secondsLeft;
  
    }, 1000);
  }