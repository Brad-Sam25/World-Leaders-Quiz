let questi = document.querySelector("#question-text");
let choices = document.querySelectorAll("#choices");
let scoreNumber = document.querySelector(".score-number");
let choiceA = document.querySelector("#A");
let choiceB = document.querySelector("#B");
let choiceC = document.querySelector("#C");
let choiceD = document.querySelector("#D");
let outPut = undefined;
let correctAnswer = undefined;

let questionCount = 0;
let timer = 120;
let score = 0;

let questions = [
    {
        question: 'Who is the current president of Afghanistan? ',
        option1: 'Abdul Ahad',
        option2: 'Hamid Karzai',
        option3: 'Ashraf Ghani',
        option4: 'Burhanuddin Rabbani',
        answer: 'Ashraf Ghani',
    },
    {
        question: 'Who is the current president of Brazil? ',
        option1: 'Jair Bolsonaro',
        option2: 'Dilma Rousseff',
        option3: 'Jose Sarney',
        option4: 'Eduardo Cunha',
        answer: 'Jair Bolsonaro',
    },
    {
        question: 'Who is the current president of France? ',
        option1: 'Nicolas Sarkozy',
        option2: 'Charles de Gaulle',
        option3: 'Emmanuel Macron',
        option4: 'Burhanuddin Rabbani',
        answer: 'Emmanuel Macron',
    },
    {
        question: 'Who is the current president of Haiti? ',
        option1: 'Jocelerme Privert',
        option2: 'Enex Jean Charles',
        option3: 'Jean-Bertrand Aristide',
        option4: 'Prosper Avril',
        answer: 'Jocelerme Privert',
    },
    {
        question: 'Who is the current prime minister of the United Kingdom? ',
        option1: 'Theresa May',
        option2: 'Boris Johnson',
        option3: 'Gordon Brown',
        option4: 'Margret Thatcher',
        answer: 'Boris Johnson',
    },
    {
        question: 'Who is the current prime minister of Japan? ',
        option1: 'Shinzo Abe',
        option2: 'Yasuo Fukuda',
        option3: 'Yoshihide Suga',
        option4: 'Junichiro',
        answer: 'Yoshihide Suga',
    },
    {
        question: 'Who is the current president of the United States of America? ',
        option1: 'Joe Biden',
        option2: 'Donald Trump',
        option3: 'Bill Clinton',
        option4: 'George W. Bush',
        answer: 'Joe Biden',
    },
    {
        question: 'Who is the current prime minister of India? ',
        option1: 'Manmohan Singh',
        option2: 'Inder Kumar Gurjal',
        option3: 'Narenda Modi',
        option4: 'Rajiv Gandhi',
        answer: 'C',
    }
]


choiceA.addEventListener("click", function() {
    outPut = "A";
    decideCorrect();
    setQuestion();
});

choiceB.addEventListener("click", function() {
    outPut = "B";
    decideCorrect();
    setQuestion();
});

choiceC.addEventListener("click", function() {
    outPut = "C";
    decideCorrect();
    setQuestion();
});

choiceD.addEventListener("click", function() {
    outPut = "D";
    decideCorrect();
    setQuestion();
});

function decideCorrect () {
    if(outPut === correctAnswer) {
        score++;
    } else {
        timer = timer - 10;
    }

    questionCount++;
}

function setQuestion() {
    choiceA.value = questions[questionCount].option1;
    choiceB.value = questions[questionCount].option2;
    choiceC.value = questions[questionCount].option3;
    choiceD.value = questions[questionCount].option4;
    correctAnswer = questions[questionCount].answer;
    questi.value = questions[questionCount].question;
}

function start() {
    questionCount = 0;
    timer = 120;
    score = 0;
    correctAnswer = undefined;
    outPut = undefined;
    setQuestion();
}

start();
