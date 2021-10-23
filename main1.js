player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
playerscore=0;
player2score=0;
document.getElementById("name").innerHTML= player1 +":";
document.getElementById("name1").innerHTML=player2 +":";
document.getElementById("number").innerHTML=playerscore ;
document.getElementById("number2").innerHTML=player2score;
document.getElementById("Questionname").innerHTML="Question turn : "+player1;
document.getElementById("Answername").innerHTML="Answer turn : "+player2;
function check(){
    q=document.getElementById("word").value;
q1=document.getElementById("word2").value;
actual_answer=parseInt(q)*parseInt(q1);
d1= "<h4>" +q+'*'+q1+"</h4>";
d2= "<br><h4 id='hd'>Answer </h4> <input type='text' placeholder='Number2' id='n2'<br><br>";
d3="<br><br><button class='btn btn-primary' onclick='submit()'> Check </button><br><br>";
d4=d1+d2+d3;
document.getElementById("output").innerHTML=d4;
document.getElementById("word").value="";
document.getElementById("word2").value="";
}
question_turn="p1";
answer_turn="p2";
function submit(){
get_answer=document.getElementById("n2").value;
if(get_answer==actual_answer){
if(answer_turn="p2"){
player2score=player2score+1;
document.getElementById("number2").innerHTML=player2score;
}
else{
    playerscore=playerscore+1;
    document.getElementById("number").innerHTML= playerscore;
    }
}
if(question_turn="p1"){
    question_turn="p2";
    document.getElementById("Questionname").innerHTML="Question turn: "+player2;
    }
    else{
        question_turn="p1";
    document.getElementById("Questionname").innerHTML="Question turn: "+player1;
        }
        if(answer_turn="p1"){
            answer_turn="p2";
            document.getElementById("Answername").innerHTML="Answer turn: "+player2;
            }
            else{
                answer_turn="p1";
            document.getElementById("Answername").innerHTML="Answer turn: "+player1;
                }
                document.getElementById("output").innerHTML="";
    }

