
//global variables, including an array of questions
var correctAnswers = 0;
var incorrect = 0;
var intervalId;
var questionNumber = 0;
var trivia = [

    {
        question: "What is the name of Jon Snow’s direwolf?",
        correct: "Ghost",
        incorrect: [
            "Lady",
            "ShaggyDog",
            "Nymeria"]
    },
    {
        question: 'Who said “That’s what I do, I drink and I know things."?',
        correct: "Tyrion Lannister",
        incorrect: [
            "Aria Stark",
            "Robert Baratheon",
            "Jon Snow"]
    },
    {
        question: "Who is the King of Westeros when the series begins?",
        correct: "Robert Baratheon",
        incorrect: [
            "Ned Stark",
            "Rob Stark",
            "Jaime Lannister"]
    },
    {
        question: "What are the words of the House of Stark",
        correct: "Winter is coming",
        incorrect: [
            "First in Battle",
            "Growing Strong",
            "Ours is the Fury"]
    },
    {
        question: "Who is the eldest stark child?",
        correct: "Robb Stark",
        incorrect: [
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

        displayChoices();
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


};

//append this for each answer

//assign divs numbers 1-4,
//store answers in a variable with a random number
//assign answer to div with that random number

function displayChoices() { // will be called when the question is started

    console.log("display choices called");
    $("#choice1").text(trivia[questionNumber].correct);
    $("#choice2").text(trivia[questionNumber].incorrect[0]);
    $("#choice3").text(trivia[questionNumber].incorrect[1]);
    $("#choice4").text(trivia[questionNumber].incorrect[2]);



    //assign correct answer to a random number between 1-4
    // var correctHolder = Math.floor(Math.random() * 4);
    // return correctHolder;

    // //assign incorrect answers to remaining numbers that aren't the correct answer
    // for (var i = 0; i < trivia[questionNumber].incorrect.length; i++) {
    //     var answerNumber = Math.floor(Math.random() * 4);
    //     return trivia[questionNumber].incorrect[i];

    //     if (answerNumber === 1) {
    //     }
    //     if (answerNumber === 2) { }
    //     if (answerNumber === 3) { }


// }
}








//code to do with questions

// var userChoice = function 

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








