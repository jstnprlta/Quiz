
var pageContentEl = document.querySelector("#page-content");
pageContentEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");

var headerEl=document.querySelector("#header");
var timerEl = document.querySelector("#timer");
var headerHighScoreBtn = document.querySelector("#main-highscore-btn");

var timeLeft = 50;

//checks to see if theres anything in local storage then adds them to array, if not retun an empty array
var allScores = localStorage.getItem("allScores")?JSON.parse(localStorage.getItem("allScores")):[]


var timeCountdown;

//function to countdown time
var countdown = function() {
    timeCountdown = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent= timeLeft;
        }else {
            clearInterval(timeCountdown);
            alert("Quiz has timed out, your score is 0! Please Quiz Again")
            location.reload();          
        }
    }, 800)
};



//function to start page
var startingPage = function() {
    //create div container to hold instructions start
    var quizInstructionsEl = document.createElement("div");
    quizInstructionsEl.setAttribute("id", "instructions");
    pageContentEl.appendChild(quizInstructionsEl);
    // title for insturctions
    var titleEl = document.createElement("h1");
    titleEl.setAttribute("id", "title");
    titleEl.textContent = ("Coding Quiz");
    quizInstructionsEl.appendChild(titleEl);
    //instruction description
    var quizDescriptionEl = document.createElement("p");quizDescriptionEl.setAttribute("id", "quiz-description");
    quizDescriptionEl.textContent= ("Try to answer the following code related question within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
    quizInstructionsEl.appendChild(quizDescriptionEl);
    
    //button to start quiz
    var buttonStartEl = document.createElement("button");
    buttonStartEl.setAttribute("id", "btn-start");
    buttonStartEl.className = ("btn btn-start");
    buttonStartEl.textContent= "Start Quiz";
    quizInstructionsEl.appendChild(buttonStartEl);

    // function that removes starting instructions and starts quiz 
    var startQuizButton = function() {
        countdown();
        quizInstructionsEl.remove();
        quizOne();
    }
    
    //event listener for when button is clicked to start quiz
    buttonStartEl.addEventListener("click", startQuizButton);

    // event listener 
    headerHighScoreBtn.addEventListener("click",function(){
        quizInstructionsEl.remove();
        highScore();
    });
}


//function for first question
var quizOne = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question one
    var questionOneEl = document.createElement("h1");
    questionOneEl.setAttribute("id", "question-one");
    questionOneEl.textContent = ("Commonly used data types DO NOT include:");
    quizContainerEl.appendChild(questionOneEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn correct-btn");
    optionOneEl.textContent = ("1. alerts");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. strings");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. booleans");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn wrong-btn");
    optionFourEl.textContent = ("4. numbers");
    optionContainerEl.appendChild(optionFourEl);

   
    // event listener for answer- either correct or wrong- then moves to next question function
    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizTwo();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizTwo();
    }
    });
}

//function for second question
var quizTwo = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question two
    var questionTwoEl = document.createElement("h1");
    questionTwoEl.setAttribute("id", "question-two");
    questionTwoEl.textContent = ("The condition in an if/else statement is enclosed with __________.");
    quizContainerEl.appendChild(questionTwoEl);

    //div for container to hold buttons 
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. quotes");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. curly brackets");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. square brackets");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn correct-btn");
    optionFourEl.textContent = ("4. parantheses");
    optionContainerEl.appendChild(optionFourEl);
    
    // event listener for answer- either correct or wrong- then moves to next question function
    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizThree();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizThree();
    }
    });
}

//function for third question
var quizThree = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question three
    var questionThreeEl = document.createElement("h1");
    questionThreeEl.setAttribute("id", "question-three");
    questionThreeEl.textContent = ("Arrays in JavaScript can be used to store __________.");
    quizContainerEl.appendChild(questionThreeEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. numbers and strings");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. other arrays");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. booleans");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn correct-btn");
    optionFourEl.textContent = ("4. all of the above");
    optionContainerEl.appendChild(optionFourEl);

    // event listener for answer- either correct or wrong- then moves to next question function
    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizFour();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizFour();
    }
    });
}

//function for fourth question
var quizFour = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question four
    var questionFourEl = document.createElement("h1");
    questionFourEl.setAttribute("id", "question-four");
    questionFourEl.textContent = ("String values must be enclosed within __________ when being assigned to variables.");
    quizContainerEl.appendChild(questionFourEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. commas");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn correct-btn");
    optionTwoEl.textContent = ("2. quotes");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. curly brackets");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn wrong-btn");
    optionFourEl.textContent = ("4. parantheses");
    optionContainerEl.appendChild(optionFourEl);

    // event listener for answer- either correct or wrong- then moves to next question function
    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizFive();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizFive();
    }
    });
}

//function for fifth and final question
var quizFive = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question five
    var questionFiveEl = document.createElement("h1");
    questionFiveEl.setAttribute("id", "question-five");
    questionFiveEl.textContent = ("A very useful tool used during development and debugging for printing content to the debugger is:");
    quizContainerEl.appendChild(questionFiveEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. JavaScript");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. terminal/git bash");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn correct-btn");
    optionThreeEl.textContent = ("3. console.log");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn wrong-btn");
    optionFourEl.textContent = ("4. for loops");
    optionContainerEl.appendChild(optionFourEl);

    // event listener for answer- then moves on to quiz done function to enter score
    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            finalScore=timeLeft;
            console.log(finalScore)
            alert("Correct Answer!");
            quizDone();
            
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            timeLeft= timeLeft-10;
            finalScore= timeLeft;
            console.log(finalScore);
            alert("Wrong Answer!");
            quizDone();
            
            
    }
    });
}

//function for final score page
var quizDone = function() {
    /* timerEl.remove(); */
    finalScore= timeLeft;
    clearInterval(timeCountdown);

    //creat div container to hold score and form
    var quizDoneEl = document.createElement("div");
    quizDoneEl.setAttribute("id", "score-form");
    pageContentEl.appendChild(quizDoneEl);

    //all done message 
    var allDoneEl = document.createElement("h1");
    allDoneEl.setAttribute("id", "all-done");
    allDoneEl.textContent = ("All done!");
    quizDoneEl.appendChild(allDoneEl);

    //final score display
    var scoreEl = document.createElement("p");
    scoreEl.setAttribute("id", "score");
    scoreEl.innerHTML = "Your final score is " +finalScore + ".";
    quizDoneEl.appendChild(scoreEl);

    //div for form

    var formContainer = document.createElement("div");
    formContainer.setAttribute("id", "container-form");
    quizDoneEl.appendChild(formContainer);
    
    //label
    var formLabel = document.createElement("label");
    formLabel.setAttribute("for", "final-score");
    formLabel.textContent= "Enter your initials:";
    formContainer.appendChild(formLabel);
  
    //form input
    var formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", "initials")
    formInput.setAttribute("name", "initials");
    formContainer.appendChild(formInput);

    //button 
    var formButton = document.createElement("button");
    formButton.setAttribute("type", "submit");
    formButton.className=("btn form-button");
    formButton.textContent = ("Sumbit");
    formContainer.appendChild(formButton);
    
    var initials = document.querySelector("#initials");

    // event listener that stores scores and initials when button clicked 
    formButton.addEventListener("click", function(){
        quizDoneEl.remove();
        headerEl.style.display="none";
        var playerScore = {
            player: initials.value.trim(),
            score: finalScore
        };

        allScores.push(playerScore);

        localStorage.setItem("allScores", JSON.stringify(allScores));

        highScore();

    })
}

var highScore = function() {
    
    var sortedScores= allScores.sort(function(firstItem, secondItem){return firstItem.score-secondItem.score} )
    sortedScores.reverse();
    console.log(sortedScores);

    var backContainerEl = document.createElement("div");
    backContainerEl.setAttribute("id", "goback-container");
    pageContentEl.appendChild(backContainerEl);

    var highScoreTitleEl = document.createElement("h1");
    highScoreTitleEl.setAttribute("id", "high-score-title");
    highScoreTitleEl.textContent = ("High Scores");
    backContainerEl.appendChild(highScoreTitleEl);

    var listContainerEl = document.createElement("ol");
    listContainerEl.setAttribute("id", "list-scores");
    backContainerEl.appendChild(listContainerEl);

    for (var i=0; i < sortedScores.length; i++) {
        var listPlayer = sortedScores[i].player;
        var listScore = sortedScores[i].score;

        var itemListEl = document.createElement("li");
        itemListEl.setAttribute("id", "list-child");
        listContainerEl.appendChild(itemListEl);
        itemListEl.textContent=(listPlayer +": "+ listScore);


    }

    var goBackBtnEL= document.createElement("button");
    goBackBtnEL.setAttribute("id", "go-back-btn")
    goBackBtnEL.className = ("btn go-back-btn");
    goBackBtnEL.textContent = ("Go Back");
    backContainerEl.appendChild(goBackBtnEL);

    var clearScoreBtnEL= document.createElement("button");
    clearScoreBtnEL.setAttribute("id", "clear-score-btn")
    clearScoreBtnEL.className = ("btn clear-score-btn");
    clearScoreBtnEL.textContent = ("Clear High Scores");
    backContainerEl.appendChild(clearScoreBtnEL);

    //event listener to either go back to starting/ or clear scores
    backContainerEl.addEventListener("click", function() {
        var targetEl = event.target ;
        if (targetEl.matches(".go-back-btn")) {
            location.reload();            
        } else if (targetEl.matches(".clear-score-btn")) {
            localStorage.clear();
            location.reload();
        }
    })
}


startingPage();