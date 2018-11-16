
//global variables, including an array of questions
var correctAnswers = 0;
var incorrect = 0;
var intervalId;
var questionNumber = 0;



var trivia = [

    {
        question: "What is the name of Jon Snow’s direwolf?",
        answers: [
            "Ghost",
            "Lady",
            "ShaggyDog",
            "Nymeria"]
    },
    {
        question: 'Who said “That’s what I do, I drink and I know things."?',
        answers: [

            "Tyrion Lannister",
            "Aria Stark",
            "Robert Baratheon",
            "Jon Snow"]
    },
    {
        question: "Who is the King of Westeros when the series begins?",
        answers: [
            "Robert Baratheon",
            "Ned Stark",
            "Rob Stark",
            "Jaime Lannister"]
    },
    {
        question: "What are the words of the House of Stark",
        answers: [
            "Winter is coming",
            "First in Battle",
            "Growing Strong",
            "Ours is the Fury"]
    },
    {
        question: "Who is the eldest stark child?",
        answers:[
            "Robb Stark",
            "Jon Snow",
            "Sanza Stark",
            "Bran Stark"]
    }

]

//code dealing with time

var count = 3
//button to start the game
window.onload = function () {
    $("#start").click(nextQuestion);

    function nextQuestion() {
        start();

        // $("answer1").text(trivia[questionNumber].answer1);

        //removes the previously correct answer
        $("#correctAnswer").empty();


        console.log(questionNumber);
        if (questionNumber > 4) {
            endGame();

        } else {
            //call the function to reset the game to the first question
            //displays new question
            $("#question").text(trivia[questionNumber].question);

            // start();
        }

    }
    //starts time
    function start() {
        console.log("start called")
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        //displays question

        renderButtons();
        //60 second timer
        //starts when the start button is pushed, or user answers a new question
        //loop to randomly go through the array, and choose that object.
    }

    function decrement() {
        count--;
        $("#timer").text(count);
        console.log("decrement called");

        if (count === 0) {
            console.log("time = 0")
            wrongAnswer();

            count = 3;
        }

    }

    function wrongAnswer() {
        //clears interval
        clearInterval(intervalId);
        console.log("wrongAnswer called");


        //clearing questions
        $("#question").empty();

        //right answer appears





        //increase wrong answers
        incorrect++;
        //restart the timer
        console.log("in wrongAnswer function")
        displayRightAnswer();
        //next question appears

        setTimeout(nextQuestion, 1000 * 3);

        function displayRightAnswer() {
            //empty the div
            //display correct answer
            $("#correctAnswer").text("The right answer is " + trivia[questionNumber].correct + "!");
            console.log("right answer displayed");
            questionNumber++;

        }
    }

    function endGame() {
        clearInterval(intervalId);
        //display wrong answers
        $("#gameWrapper").empty();
        console.log("end game called");


        //show winner box

        //display right answers

        //show restart button
    }
    function renderButtons() {

        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $(".answers").empty();

        // Loops through the array of movies

        shuffle(trivia[questionNumber].answers);
        console.log(trivia[questionNumber].answers)
        
        
        for (var i = 0; i < trivia[questionNumber].answers.length; i++) {
          
            
        
            // Then dynamicaly generates buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adds a class of movie to our button
            a.addClass("choice");
            // Added a data-attribute
            a.attr("data-name", trivia[questionNumber].answers[i]);
            // Provided the initial button text
            a.text(trivia[questionNumber].answers[i]);
            // Added the button to the buttons-view div
            $(".answers").append(a);

          
          

        
        }
      
    }
}

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
    console.log(this);
    
    var answer = $(this).attr("data-name");
  

    if (answer === trivia[questionNumber].answers[0]) {
        console.log("correct");
        correctAnswers++;

    } else {
        console.log("wrong")
        wrongAnswer();
    }
}




$(".answers").on("click", ".choice", checkAnswer);








