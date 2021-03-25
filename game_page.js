var player1=localStorage.getItem("playerone");
var player2=localStorage.getItem("playertwo");
console.log(player1,player2);
document.getElementById("name_1").innerHTML=player1+"-";
document.getElementById("name_2").innerHTML=player2+"-";
var scoreplayer1=0;
var scoreplayer2=0;
document.getElementById("score1").innerHTML=scoreplayer1;
document.getElementById("score2").innerHTML=scoreplayer2;
document.getElementById("player_question").innerHTML="Question turn : "+player1;
document.getElementById("player_answer").innerHTML="Answer turn : "+player2;

function submit(){
    var word=document.getElementById("ques").value;
    console.log(word);
    var secletter=word.charAt(1);
    var middle=Math.floor(word.length/2);
    var middleletter=word.charAt(middle);
    console.log(secletter,middleletter);
    var lastletter=word.charAt(word.length-1);
}