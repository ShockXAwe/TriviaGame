function check(){
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
    console.log(correct);
    var incorrect = 0;
    console.log(incorrect);

    if(q1=="b"){
        correct++;
    } if (q2=="b"){
        correct++;
    } if (q3=="c"){
        correct++;
    } if (q4=="d"){
        correct++;
    } if (q5=="c"){
        correct++;
    } if (q6=="d"){
        correct++;
    } if (q7=="b"){
        correct++;
    } if (q8=="d"){
        correct++;
    } if (q9=="c"){
        correct++;
    } if (q10=="b"){
        correct++;
    } if (q11=="c"){
        correct++;
    } if (q12=="b"){
        correct++;
    } if (q13=="d"){
        correct++;
    } else{
        incorrect++;
    }
    alert("you got: " + correct + " correct, and: " + incorrect + " incorrect")
}
