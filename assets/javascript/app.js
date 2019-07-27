//need questions and answers stored in variables/arrays
//need right answer defined


//appending correct values to answers and corresponding questions
$('#start').on('click', function () {

    for (var i = 0; i < questions.length; i++) {
        $('#main2').append('<h2>' + questions[i].question + '</h2');

        for (var j = 0; j < questions[i].guesses.length; j++) {
            $("#main2").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
        }
    }
    })

    //wrapping all questions and answers into one object
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

        question: "How much style do you really have if you drive a Mini-Van",
        guesses: ["Some", "Little", "Non-Existent", "Mad Style", "I'm late for soccer"],
        rightAnswer: "I'm late for soccer"

    }, {

        question: "Gary Busey has a black belt in Jujitsu",
        guesses: ["True", "False",],
        rightAnswer: "True"
    }]
