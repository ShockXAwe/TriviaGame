function myFunction() {
    var x = document.getElementById("form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
// var COUNTER = 120;
// var interval=setInterval(function () {
//     counter--;
//     console.log(counter);
//     //if counter==0
// // }, 1000)
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

    var correct = 0;
    var incorrect = 0;

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
    alert("you got: " + correct + " correct, and: " + incorrect + " incorrect")
}
