let questionTextEl = document.querySelector(".questionText");
let buttonTextEl = document.querySelector(".answerButtons");

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

// Creation of instructions and Start button
questionTextEl.textContent = instructions;
let startButtonEl = document.createElement("button");
buttonTextEl.appendChild(startButtonEl);
startButtonEl.textContent = "Start";

// Start Quiz with first question
function startQuiz() {
    startButtonEl.addEventListener("click", function() {
        questionTextEl.textContent = myQuestions[0].question;
        buttonTextEl.removeChild(startButtonEl);

        let buttonA = document.createElement("button");
        let buttonB = document.createElement("button");
        let buttonC = document.createElement("button");
        let buttonD = document.createElement("button");

        buttonTextEl.appendChild(buttonA);
        buttonTextEl.appendChild(buttonB);
        buttonTextEl.appendChild(buttonC);
        buttonTextEl.appendChild(buttonD);

        buttonA.textContent = "a. " + myQuestions[0].answers.a;
        buttonB.textContent = "b. " + myQuestions[0].answers.b;
        buttonC.textContent = "c. " + myQuestions[0].answers.c;
        buttonD.textContent = "d. " + myQuestions[0].answers.d;
    })    
}

startQuiz();

// Have more functions, i.e. 'draw new question,' 'submit answer' and call draw new question into submit answer, etc.