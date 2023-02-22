// var generateBtn = document.querySelector('.choices');
var timeEl = document.querySelector('.time');
var questionEl = document.querySelector('.question');
var bodyEl = document.querySelector('.container');
var resultEl = document.querySelector('.result');

var position = 0;
var score = 0;

var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            "does the same as HTML.",
            "is a special mechanism we can find on the web.",
            "is a programming language.",
        ],



        correct: "is a programming language.",
    },
    {
        question: "what is a string in Javascript?",
        answers: [
            "its a way to connect with css",
            "its a way to connect with html",
            "a string is  sequence of one or more characters that may consist of letters, numbers or symbols",
        ],

        correct: "a string is  sequence of one or more characters that may consist of letters, numbers or symbols",
    },
    {
        question: "whats is an array in JavaScript? ",
        answers: [
            "used to store multiple values in a single variable. ",
            "a sequence of one or more characters that may consist of letters, numbers or symbols",
            "its a way to connect with jQuery",

        ],

        correct: "used to store multiple values in a single variable.",
    }
];



var displayQuestion = function () {
    document.querySelector('.questions').textContent = questions[position].question
    document.querySelector('.choices').innerHTML = ''
    // Timer();
    for (var i = 0; i < 3; i++) {
        var button = document.createElement('button')
        button.textContent = questions[position].answers[i]
        document.querySelector('.choices').appendChild(button)
    }

};

func

document.querySelector('.choices').addEventListener('click', function (event) {
    const elem = event.target;

    if (elem.matches('button')) {
    
        var answer = elem.textContent === questions[position].correct

        if (answer){
            score++;
        }
        
    
        // check to see if it's correct
        // score
        
        
        position++;
        displayQuestion();
    }
});


displayQuestion();









// generateBtn.addEventListener("click", start );


