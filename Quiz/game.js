const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-text');
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [{
        question: "Inside with HTML element do we put Javascript ??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: 'what  is the correct syntax for referring to an external script called "xxx.js"?',
        choice1: '<script href="xxx.js">',
        choice2: '<script name="xxx.js">',
        choice3: '<script src="xxx.js">',
        choice4: '<script file="xxx.js">',
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    for (let i = 0; i < choices.length; i++) {
        const number = choices[i].dataset['number'];
        choices[i].innerText = currentQuestion['choice' + number];
    }

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', e => {

        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
}

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();