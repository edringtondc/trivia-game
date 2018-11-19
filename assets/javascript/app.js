
//global variables, including an array of questions
var correctAnswers = 0;
var incorrect = 0;
var intervalId;
var questionNumber = 0;
var count = 5



var trivia = [

    {
        question: "What is the name of Jon Snow’s direwolf?",
        answers: [
            "Ghost",
            "Lady",
            "ShaggyDog",
            "Nymeria"],
        correct: "Ghost",
        image: "assets/images/Ghost.jpg"

    },
    {
        question: 'Who said “That’s what I do, I drink and I know things."?',
        answers: [

            "Tyrion Lannister",
            "Aria Stark",
            "Robert Baratheon",
            "Jon Snow"],
        correct: "Tyrion Lannister",
        image: "assets/images/Tyrion.jpg"
    },
    {
        question: "Who is the King of Westeros when the series begins?",
        answers: [
            "Robert Baratheon",
            "Ned Stark",
            "Rob Stark",
            "Jaime Lannister"],
        correct: "Robert Baratheon",
        image: "assets/images/robert.jpg"
    },
    {
        question: "What are the words of the House of Stark",
        answers: [
            "Winter is coming",
            "First in Battle",
            "Growing Strong",
            "Ours is the Fury"],
        correct: "Winter is coming",
        image: "assets/images/winter.gif"
    },
    {
        question: "Who is the eldest stark child?",
        answers: [
            "Robb Stark",
            "Jon Snow",
            "Sanza Stark",
            "Bran Stark"],
        correct: "Robb Stark",
        image: "assets/images/rob.jpg"
    }

]

//code dealing with time


//button to start the game
window.onload = function () {
    
    $("#start").click(nextQuestion);

    function nextQuestion() {
        start();

        //removes the previously correct answer
        $("#correctAnswer").empty();


        console.log(questionNumber);
        // if 
        if (questionNumber <= trivia.length) {
              //call the function to reset the game to the first question
            //displays new question
            $("#question").text(trivia[questionNumber].question);

        } else {
            //out of questions, game over
            endGame();
            $("#startRow").show();
        }

    }
    //starts time
    function start() {
        console.log("start called")
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        //removes previous picture
        $("#picDiv").empty();
        $("#outOfTime").empty();
      
        //displays new buttons for next question
        renderButtons();
        $("#startRow").hide();
    }
    //displays countdown
    function decrement() {
        count--;
        $("#timer").text(count);
        console.log("decrement called");

        if (count === 0) {
            //if user runs out of time, it counts as a wrong answer. Count for time is reset
            $(".timer").append("<h4 id='outOfTime'>You ran out of time!</h4>")
            wrongAnswer();
            count = 5;
        }

    }

    function wrongAnswer() {
        //clears interval
        clearInterval(intervalId);
        //clearing questions and choices
        $("#question").empty();
        $(".buttonsDiv").empty();
        //increase wrong answers
        incorrect++;
        //show correct answer
        displayRightAnswer();
        //next question appears after 5 seconds
        setTimeout(nextQuestion, 1000 * 5);
    }

    //Function to display correct answer
    function displayRightAnswer() {
        //empty the div
        $("#correctAnswer").empty();
        //display correct answer

        //delete the buttons
        $(".buttonsDiv").empty();
       
        //displays correct answer with image
        $("#correctAnswer").text("The answer is: " + trivia[questionNumber].correct + "!");
        $("#picDiv").append("<img src='" + trivia[questionNumber].image + "' />");
        
        //increases questionNumber to move to next array
        questionNumber++;

    }

   

    //ends the game play
    function endGame() {
        clearInterval(intervalId);
        //display wrong answers
        $("#gameWrapper").empty();
        console.log("end game called");
        score();
        questionNumber = 0;
        $("#timer").empty();
        
    
    }
    function renderButtons() {
        // Deletes the buttons prior to adding new answers
        $(".buttonsDiv").empty();

        if (questionNumber < trivia.length) {
            //shuffles the array of answers
            shuffle(trivia[questionNumber].answers);
            console.log(trivia[questionNumber].answers)

            //creates new buttons, with choices randomized
            for (var i = 0; i < trivia[questionNumber].answers.length; i++) {

                var a = $("<button class='btn'>");
               
                a.addClass("choice");
                // Added a data-attribute to identify answer
                a.attr("data-name", trivia[questionNumber].answers[i]);
                // Provided the initial button text
                a.text(trivia[questionNumber].answers[i]);
                // Added the button to the answers div
                $(".buttonsDiv").append(a);
            }

        } else {
            //if no more questions, end the game
            endGame();
        }
    }
    //Function to shuffle answer array
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function checkAnswer() {
        event.preventDefault();
        clearInterval(intervalId);

        var answer = $(this).attr("data-name");
        console.log("answer: " + answer);

        if  ((answer === trivia[questionNumber].correct) && (questionNumber <= trivia.length)) {
            console.log("correct");
            $("#picDiv").append("<h3 id='userCorrect'> You are correct! </h3>");
            correctAnswers++;
            displayRightAnswer();
            setTimeout(nextQuestion, 1000 * 5);

        } else if(answer !== trivia[questionNumber].correct) {
            console.log("wrong");
            $("#picDiv").append("<h3 id='userWrong'> You are wrong! </h3>");
            wrongAnswer();
        }
    }

    //WATCHES for a click in the answer div, calls back checkAnswer
    $(".buttonsDiv").on("click", ".choice", checkAnswer);

    //writes score to the box
    function score() {
        $("#startRow").show();
        $(".scoreBox").append("<h3>Correct Answers: <span id='correct'></span></h3>")
        $(".scoreBox").append("<h3>Incorrect Answers: <span id='incorrect'></span></h3>")
        
        $("#correct").text(correctAnswers);
        $("#incorrect").text(incorrect);
    }


}



