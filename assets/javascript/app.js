

//telling game to run start function on click and use values found in game()
$('#start').on('click', function () {
    game.start();
})

//wrapping all questions and answers into 'questions' object
var questions = [{
    question: "What year did the Twins last win the World Series?",
    guesses: ["1932", "1965", "1971", "1986", "1991"],
    rightAnswer: "1991"
}, {

    question: "How many 'do do do's' does Baby Shark have?",
    guesses: ["4", "5", "3", "6", "8"],
    rightAnswer: "6"
}, {

    question: "What was the top grossing movie of the 90's?",
    guesses: ["Jurassic Park", "Titanic", "Lion King", "Independence Day", "The Sixth Sense"],
    rightAnswer: "Titanic"
}, {

    question: "Who is the only person that can prevent forest fires?",
    guesses: ["You", "Him", "Her", "The Bear",],
    rightAnswer: "You"

}, {

    question: "Gary Busey has a black belt in Jujitsu",
    guesses: ["True", "False",],
    rightAnswer: "True"
}];


//displaying results page upon timer reaching zero using done() function;
var game = {
    correct: 0,
    incorrect: 0,
    counter: 15,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time has expired");
            game.done();
        }
    },

    //declaring a timer to countdown from 30 and display to page, removing start button, using for loops to go through all of the questions and appending them to appear on page
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#main2').prepend('<h2>Time Remaining: <span id="counter">15</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#main2').append('<h2>' + questions[i].question + '</h2>');
            //assigning radio buttons to questions and appending them to page, storing values based on button chosen 
            for (var j = 0; j < questions[i].guesses.length; j++) {
                $('#main2').append("<input type='radio' name='question-" + i + "' value='" + questions[i].guesses[j] + "'>" + questions[i].guesses[j]);
            }
        }


        //done button; clears page and shows results
        $('#main2').append('<br><br><button id="end">DONE</button>');
        $('#end').on('click', function () {
            game.done();
            result();
        })

  
    },
    //check chosen answers against 'rightAnswer' for corresponding question and store to counter totals
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].rightAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;

            }

        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].rightAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;

            }

        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].rightAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;

            }

        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].rightAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;

            }

        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].rightAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;

            }

        });
        //making results page to clear the timer and append stored values to page using <h3> tags
        this.result();
    },

    result: function () {
        clearInterval(timer);
        $('#main2 h2').remove();
        //showing how many correct/incorrect answers user guessed/didn't guess, and posting to page
        $('#main2').html("<h2>All done!</h2>");
        $('#main2').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#main2').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#main2').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

}




