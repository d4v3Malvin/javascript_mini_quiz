var quizContainer = document.getElementById("quiz")
var resultContainer = document.getElementById("result")
var submitButton = document.getElementById("submit")

var number = 0;

var index = 0;

var question = [
    {
        question: "const can be redeclared and reassigned, True or False",
        answer: {
            a: "true",
            b: "false"
        },
        correctAnswer: "b"
    },
    {
        question: "what is multiplication assignment operator?",
        answer: {
            a: "=",
            b: "+=",
            c: "/=",
            d: "*="
        },
        correctAnswer: "d"
    }
]

function showQuestion(questions, container, index) {  
    var answer = [];
    number = index + 1;
    var output;
    for(letter in questions[index].answer){
        console.log(letter);
        answer.push(
            '<div class="form-check form-check-inline mb-3">' + 
                '<input class="form-check-input" type="radio" name="answer'+ number +'" id="' + letter + '">' +
                '<label class="form-check-label" for="radio'+ letter +'">'+ letter + " : " + questions[index].answer[letter] +'</label>' +
            '</div>'
        )
    }

    container.innerHTML =
    '<div class="col">'+
        '<div class="row" id="question">' +
            '<div class="col-1 text-center">'+
                '<h2>' + number + '. </h2>' +
            '</div>'+
            '<div class="col">'+
                '<h3>' + questions[index].question + '</h3>' + 
            '</div>'+
        '</div>' 
        +
        '<div class="row" id="answer">' +
            '<div class="col-1"></div>'+
            '<div class="col answers">'+
                answer.join('') + 
            '</div>'+
        '</div>'+
    '</div>' 
}

function showanswer() {  
    var correct = false;
    var answerContainers = document.getElementsByName('answer'+number);
    let answer;
    for (let i = 0; i < answerContainers.length; i++) {
        const element = answerContainers[i];
        if (element.checked){
            answer = element.id
        }
    }

    if (answer == undefined){
        alert("Please Pick the Answer")
        return
    }

    resultContainer.classList.add("my-2","py-2");

    if (question[index].correctAnswer == answer){
        resultContainer.innerHTML = 
        '<h3>Correct</h3>'
        resultContainer.style.backgroundColor = "green"
        correct = true;
    }
    else{
        resultContainer.innerHTML = 
            '<h3>Incorrect</h3>'
        resultContainer.style.backgroundColor = "red"
    }

    setTimeout(() => {
        resultContainer.innerHTML = ""
        resultContainer.style.backgroundColor = ""
        resultContainer.classList.remove("my-2","py-2");
        if (correct){
            quizContainer.innerHTML = ""
            index++
            showQuestion(question,quizContainer,index)
        }
    }, 5000);
    
}

submitButton.onclick = () => {
    showanswer();
}

showQuestion(question,quizContainer,index);