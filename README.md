# trivia-game

You'll create a trivia game that shows only one question until the player answers it or their time runs out.
If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

The scenario is similar for wrong answers and time-outs.


If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


start button 30 second timer
click on answer - get a picture

end of game you get number of correct and wrong
start over button

setInterval - is going to run a function at a repeated interval (every 5 seconds, 15 seconds etc)
clearInterval - before you re-run a setInterval

setTimeout - 

function timer - 

 for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("movie");
          // Added a data-attribute
          a.attr("data-name", movies[i]);
          // Provided the initial button text
          a.text(movies[i]);
          // Added the button to the HTML
          $("#buttons-view").append(a);
        }
      }