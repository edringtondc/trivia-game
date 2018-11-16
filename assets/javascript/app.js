
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
        
        for (var i = 0; i < trivia[questionNumber].answers.length; i++) {
            
            var array = [0, 1, 2, 3];
            var randNum = Math.floor(Math.random()*trivia[questionNumber].answers.length);
            var number = randNum;

        
            // Then dynamicaly generates buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adds a class of movie to our button
            a.addClass("answer");
            // Added a data-attribute
            a.attr("data-name", trivia[questionNumber].answers[randNum]);
            // Provided the initial button text
            a.text(trivia[questionNumber].answers[randNum]);
            // Added the button to the buttons-view div
            $(".answers").append(a);

            console.log("number is" + number);
          

            

        }
        trivia[questionNumber].answers.splice(number);
    }
}

        //randomize the number
        //+ with the #choice + 
        //`#choice${rndnum}` // "#choice"+rn
        //loop 1-4 
        //check != rndnum
        // var choiceArray = [1, 2, 3, 4];




        // for (var i = 0; i < choiceArray.length; i++) {
        //     var rndnum = [Math.floor(Math.random() * choiceArray.length)];

        //         $(`#choice${rndnum}`).text(trivia[questionNumber].correct);
        //         $(`#choice${rndnum}`).text(trivia[questionNumber].incorrect[0]);
        //         $(`#choice${rndnum}`).text(trivia[questionNumber].incorrect[1]);
        //         $(`#choice${rndnum}`).text(trivia[questionNumber].incorrect[2]);

        //         //needs to put a random number in correct, and then do it for incorrects as well, so some sort of if statement to do the rest
        // }


//append this for each answer

//assign divs numbers 1-4,
//store answers in a variable with a random number
//assign answer to div with that random number



// find random
// get index
// input on page
// slice it out




// function checkAnswer() {

//     var answer = $('.answers input:radio:checked');

//     if (answer.attr("class") === "correct") {
//         console.log("correct");

//     } else {
//         console.log("wrong")
//     }
// }


// $(".answers").on("click", function() {


// //code to do with questions
// checkAnswer();

// // var userChoice = function 

// });

// //if user input = correct 
// if (userChoice === trivia[questionNumber].correct) {
//     //- correct answers increases
//     correctAnswers++;
//     displayRightAnswer();

//     //picture pops up and says correct

// }
// else {
//     //if user input = incorrect 
//     wrongAnswers();

// }








