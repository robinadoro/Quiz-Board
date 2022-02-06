function myButton(){
    var score = 0;
     var currentAnswer1 = document.first.quiz1.value;
     var currentAnswer2 = document.first.quiz2.value;
     var currentAnswer3 = document.first.quiz3.value;
     var currentAnswer4 = document.first.quiz4.value;
     var currentAnswer5 = document.first.quiz5.value;
     var result = document.getElementById("text")
     if (currentAnswer1==1){score+=20};
     if (currentAnswer2==4){score+=20};
     if (currentAnswer3==8){score+=20};
     if (currentAnswer4==11){score+=20};
     if (currentAnswer5==14){score+=20};
  
     if (score==100){
         result.textContent="Your score is 100%. Excellently Passed";
     } else if(score==80){
         result.textContent="Your score is 80%. Excelently Passed";
     }else if(score==60){
        result.textContent="Your score is 60%. Fairly Passed";
    }else {
        result.textContent="Poor Score. Retake Test";
    }
    document.getElementById("quiz").reset();
} 