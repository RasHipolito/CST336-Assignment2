
var quiz = [];
var tracker = 0; 
var score = 0;

function hidePages() {
    document.getElementById("QuizPage").style.display = "none";
    document.getElementById("Results").style.display = "none";
}

function createQuestions() {
    var Question1 = {ID:"1", question:"What is 12 * 12?",
                    answer1:"122", answer2:"1212", answer3:"144", answer4:"142",
                    correctAnswer: "3", answered:"false"};
    
    var Question2 = {ID:"2", question:"What color is made when mixing blue and yellow?",
                    answer1:"Green", answer2:"Orange", answer3:"Purple", answer4:"Red",
                    correctAnswer: "1", answered:"false"};
    
    var Question3 = {ID:"3", question:"Which continent is the largest?",
                    answer1:"North America", answer2:"Africa", answer3:"Asia", answer4:"Europe",
                    correctAnswer: "3", answered:"false"};
    
    var Question4 = {ID:"4", question:"What is the formula for gravity?",
                    answer1:"10 m/s", answer2:"9.8 m/s^2", answer3:"10.2 g/s^2", answer4:"9.8 m/s",
                    correctAnswer: "2", answered:"false"};
    
    var Question5 = {ID:"5", question:"What is the largest mammal on Earth?",
                    answer1:"Gray Whale", answer2:"African Elephant", answer3:"Orca", answer4:"Blue Whale",
                    correctAnswer: "4", answered:"false"};
    quiz[0] = Question1;
    quiz[1] = Question2;
    quiz[2] = Question3;
    quiz[3] = Question4;
    quiz[4] = Question5;
    
}

function checkAnswer() {
    var answer = document.getElementsByName("answer");
    var selectedAnswer = 0;
    
    for(var i = 0; i < answer.length; i++) {
        if(answer[i].checked)
           selectedAnswer = answer[i].value;
    }    
    if(selectedAnswer == "") {
        alert("Please select an answer");
        return false;
        
    }
    else {
        if(quiz[tracker].correctAnswer == (selectedAnswer)) 
            {++score;}
    }
    quiz[tracker].answered = "true";
    nextPage();
}

function nextPage() {
    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
    document.getElementById("answer4").checked = false;
    var numAnswered = 0;
    for(var i = 4;i >= 0; i--) {
        if(quiz[i].answered == "true") {
            numAnswered++;
        } else {
            tracker = i;
        }
    }
   if(numAnswered == 5) {
       endOfQuiz();
   }else {
    document.getElementById("question").innerHTML=quiz[tracker].question;
    document.getElementById("answerPos1").innerHTML=quiz[tracker].answer1;
    document.getElementById("answerPos2").innerHTML=quiz[tracker].answer2;
    document.getElementById("answerPos3").innerHTML=quiz[tracker].answer3;
    document.getElementById("answerPos4").innerHTML=quiz[tracker].answer4;
    }
}

function begin() {
    document.getElementById("FirstPage").style.display = "none";
    document.getElementById("QuizPage").style.display = "inline";
    createQuestions();
    nextPage();
}

function endOfQuiz() {
    alert("This is the end of the quiz. \nAre you ready to see your results?");
    document.getElementById("QuizPage").style.display = "none";
    document.getElementById("Results").style.display = "inline"
    document.getElementById("Score").innerHTML="Your score: " + score;

}


