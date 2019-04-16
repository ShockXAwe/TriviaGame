$("#form").hide();
$("#endGameTimeUp").hide();
$("#endGameSubmit").hide();

var correct = 0;
var incorrect = 0;

$("#start").click(function () {
    $("#form").show();
    $("#instructions").hide();
    $("#start").hide();

    var counter = 100;
    setInterval(function() {
        counter--;
        $("#counter").text("Time remaining: " + counter)
        console.log(counter);
        if (counter == 0) {
            check();
            $("#correctTimeUp").text("Correct: " + correct);
            $("#incorrectTimeUp").text("Incorrect: " + incorrect);
            $("#form").hide();
            $("#endGameTimeUp").show();
        } 
    }, 1000);


    $("#submit").click(function () {
        check(); 
        counter = null;
        $("#correctSubmit").text("Correct: " + correct);
        $("#incorrectSubmit").text("Incorrect: " + incorrect);
        $("#form").hide();
        $("#endGameSubmit").show();
    })
    
})

function check() {
    var q1 = document.theForm.q1.value;
    var q2 = document.theForm.q2.value;
    var q3 = document.theForm.q3.value;
    var q4 = document.theForm.q4.value;
    var q5 = document.theForm.q5.value;
    var q6 = document.theForm.q6.value;
    var q7 = document.theForm.q7.value;
    var q8 = document.theForm.q8.value;
    var q9 = document.theForm.q9.value;
    var q10 = document.theForm.q10.value;
    var q11 = document.theForm.q11.value;
    var q12 = document.theForm.q12.value;
    var q13 = document.theForm.q13.value;

    if (q1 == "b") {
        correct++;
    } else {
        incorrect++;
    } if (q2 == "b") {
        correct++;
    } else {
        incorrect++;
    } if (q3 == "c") {
        correct++;
    } else {
        incorrect++;
    } if (q4 == "d") {
        correct++;
    } else {
        incorrect++;
    } if (q5 == "c") {
        correct++;
    } else {
        incorrect++;
    } if (q6 == "d") {
        correct++;
    } else {
        incorrect++;
    } if (q7 == "b") {
        correct++;
    } else {
        incorrect++;
    } if (q8 == "d") {
        correct++;
    } else {
        incorrect++;
    } if (q9 == "c") {
        correct++;
    } else {
        incorrect++;
    } if (q10 == "b") {
        correct++;
    } else {
        incorrect++;
    } if (q11 == "c") {
        correct++;
    } else {
        incorrect++;
    } if (q12 == "b") {
        correct++;
    } else {
        incorrect++;
    } if (q13 == "d") {
        correct++;
    } else {
        incorrect++;
    }
}
