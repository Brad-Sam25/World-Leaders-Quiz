let questi = document.querySelector("#question-text");
let choices = document.querySelectorAll("#choices");
let scoreNumber = document.querySelector(".score-number");
let choiceA = document.querySelector("#A");
let choiceB = document.querySelector("#B");
let choiceC = document.querySelector("#C");
let choiceD = document.querySelector("#D");
let timeEl = document.querySelector("#timer");
let resetEl = document.querySelector("#reset")
let congratsEl = document.querySelector("#congrats")
let finScore = document.querySelector("#final-score")

let outPut = undefined;
let correctAnswer = undefined;

let questionCount = 0;
let timer = 120;
let score = 0;
let topScore = +localStorage.getItem("topScore");

let questions = [
    {
        question: 'Who is the current president of Afghanistan? ',
        option1: 'Abdul Ahad',
        option2: 'Hamid Karzai',
        option3: 'Ashraf Ghani',
        option4: 'Burhanuddin Rabbani',
        answer: 'C',
    },
    {
        question: 'Who is the current president of Brazil? ',
        option1: 'Jair Bolsonaro',
        option2: 'Dilma Rousseff',
        option3: 'Jose Sarney',
        option4: 'Eduardo Cunha',
        answer: 'A',
    },
    {
        question: 'Who is the current president of France? ',
        option1: 'Nicolas Sarkozy',
        option2: 'Charles de Gaulle',
        option3: 'Emmanuel Macron',
        option4: 'Burhanuddin Rabbani',
        answer: 'C',
    },
    {
        question: 'Who is the current president of Haiti? ',
        option1: 'Jocelerme Privert',
        option2: 'Enex Jean Charles',
        option3: 'Jean-Bertrand Aristide',
        option4: 'Prosper Avril',
        answer: 'A',
    },
    {
        question: 'Who is the current prime minister of the United Kingdom? ',
        option1: 'Theresa May',
        option2: 'Boris Johnson',
        option3: 'Gordon Brown',
        option4: 'Margret Thatcher',
        answer: 'B',
    },
    {
        question: 'Who is the current prime minister of Japan? ',
        option1: 'Shinzo Abe',
        option2: 'Yasuo Fukuda',
        option3: 'Yoshihide Suga',
        option4: 'Junichiro',
        answer: 'C',
    },
    {
        question: 'Who is the current president of the United States of America? ',
        option1: 'Joe Biden',
        option2: 'Donald Trump',
        option3: 'Bill Clinton',
        option4: 'George W. Bush',
        answer: 'A',
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

if (topScore !== null) {
    if (score > topScore) {
        localStorage.setItem("topScore" , score);
    } else {
        localStorage.setItem("topScore", score);
    }
}
 console.log(topScore);

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

resetEl.addEventListener("click",function() {
    start();
})

function endGame() {
    congratsEl.style.visibility = "visible"
    finScore.style.visibility = 'visible'
    // choiceC.innerHTML = "View Highscore "
    resetEl.style.visibility = "visible"
    congratsEl.innerHTML = "Congrats the quiz is over!!!"
    finScore.innerHTML = `Your score is ${score} and your time left is ${timer} ! `
    // choiceC.innerHTML = "View Highscore "
    resetEl.innerHTML = "Reset"
    choiceA.style.visibility = 'hidden'
    choiceB.style.visibility = 'hidden'
    choiceC.style.visibility = 'hidden'
    choiceD.style.visibility = 'hidden'
}



function decideCorrect () {
    if(outPut === correctAnswer) {
        console.log("correct")
        score++;
        let scoreEl = document.querySelector(".score-number");
    scoreEl.innerHTML = score;
    } else {
        console.log("incorrect")
        timer = timer - 10;
    }

    questionCount++;

    if (questionCount >= questions.length ) {
        endGame();
    }
}

function setQuestion() {
    console.log(setQuestion);

    choiceA.innerHTML = questions[questionCount].option1;
    choiceB.innerHTML = questions[questionCount].option2;
    choiceC.innerHTML = questions[questionCount].option3;
    choiceD.innerHTML = questions[questionCount].option4;
    correctAnswer = questions[questionCount].answer;
    questi.innerHTML = questions[questionCount].question;

    
}

function handleTimer () {
    const interval = setInterval(() => {
        timer--;
        timeEl.innerHTML = timer
        
        if (timer <= 0 || questionCount >= questions.length) {
            clearInterval(interval);
            endGame();
        } 
    }, 1000) 
}

function start() {
    choiceA.style.visibility = 'visible'
    choiceB.style.visibility = 'visible'
    choiceC.style.visibility = 'visible'
    choiceD.style.visibility = 'visible'

    congratsEl.style.visibility = "hidden"
    finScore.style.visibility = 'hidden'
    // choiceC.innerHTML = "View Highscore "
    resetEl.style.visibility = "hidden"

    questionCount = 0;
    timer = 120;
    score = 0;
    correctAnswer = undefined;
    outPut = undefined;
    
    let questionEl = document.getElementById("question-count");
    questionEl.innerHTML = questionCount;
    let scoreEl = document.querySelector(".score-number");
    timeEl.innerHTML = timer
    scoreEl.innerHTML = score;
    
    questi.innerHTML = questions[0].question
    handleTimer();
    setQuestion();
}

start();

