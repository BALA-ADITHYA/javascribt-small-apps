const questions = [
    {
        question: "which is the largest continent inthe world?",
        answers:[
            {text:"africa",correct:"false"},
            {text:"asia",correct:"true"},
            {text:"europe",correct:"false"},
            {text:"america",correct:"false"}
        ]
    },
    {
        question: "which is the smallest country inthe world?",
        answers:[
            {text:"vatican city",correct:"true"},
            {text:"india",correct:"false"},
            {text:"nepal",correct:"false"},
            {text:"chile",correct:"false"}
        ]
    },
    {
        question: "which is the largest animal inthe world?",
        answers:[
            {text:"shark",correct:"false"},
            {text:"Blue whale",correct:"true"},
            {text:"cat",correct:"false"},
            {text:"rat",correct:"false"}
        ]
    },
    {
        question: "which is the largest desert inthe world?",
        answers:[
            {text:"kalkari",correct:"false"},
            {text:"gopi",correct:"false"},
            {text:"sahara",correct:"true"},
            {text:"rat",correct:"false"},
        ]
    },
    {
        question: "which is the largest sea inthe world?",
        answers:[
            {text:"indian ocean",correct:"false"},
            {text:"pasific ocean",correct:"true"},
            {text:"sea of bengal",correct:"false"},
            {text:"red sea",correct:"false"}
        ]
    },
]



const question = document.querySelector("#question");
const answerbtn = document.getElementById("answer-buttons");
const next = document.querySelector(".next-btn");

let quesIndex =0;
let score =0;

function startQuiz(){
    quesIndex=0;
    score=0;
    next.innerHTML="Next"
    showQuestions();
}

function showQuestions () {
    let currentquestion = questions[quesIndex];
    let questionNo=quesIndex+1;
    question.innerHTML= questionNo + "." +currentquestion.question;


    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        document.getElementById("answer-buttons").appendChild(button)
           

    })
}

startQuiz();


function resetState() {
    next.style.display = "none"
    while(answerbtn.firstChild)
}