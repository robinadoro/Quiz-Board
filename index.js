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
    result.textContent=score;
}