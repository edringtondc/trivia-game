
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

        // $("answer1").text(trivia[questionNumber].answer1);

        //removes the previously correct answer
        $("#correctAnswer").empty();


        console.log(questionNumber);
        if (questionNumber > trivia.length) {
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
        $("#picDiv").empty();
        renderButtons();
        score();
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

            count = 5;
        }

    }

    function wrongAnswer() {
        //clears interval
        clearInterval(intervalId);

        //clearing questions
        $("#question").empty();

        //right answer appears

        //increase wrong answers
        incorrect++;
        //restart the timer
        console.log("in wrongAnswer function")
        displayRightAnswer();

        //next question appears

        setTimeout(nextQuestion, 1000 * 5);
        console.log("wrong answer time out called");


    }
    function displayRightAnswer() {
        //empty the div
        $("#correctAnswer").empty();
        //display correct answer
       
        
        $("#correctAnswer").text("The right answer is " + trivia[questionNumber].correct + "!");
        $("#picDiv").append("<img src='" + trivia[questionNumber].image + "' />");
        console.log("right answer displayed" + trivia[questionNumber].correct);
        questionNumber++;

    }

    function endGame() {
        clearInterval(intervalId);
        //display wrong answers
        $("#gameWrapper").empty();
        console.log("end game called");
        score();

        


        //show winner box

        //display right answers

        //show restart button
    }
    function renderButtons() {

        // Deletes the buttons prior to adding new answers

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

        if (answer === trivia[questionNumber].correct) {
            console.log("correct");
            correctAnswers++;
            displayRightAnswer();
            setTimeout(nextQuestion, 1000 * 5);
            


        } else {
            console.log("wrong")
            wrongAnswer();
            
            
        }







    }
    $(".answers").on("click", ".choice", checkAnswer);

    function score(){

        $("#correct").text(correctAnswers);
        $("#incorrect").text(incorrect);
    }


}



