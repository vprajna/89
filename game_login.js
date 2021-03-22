
function login(){
var player1=document.getElementById("playerone").value;
var player2=document.getElementById("playertwo").value;
localStorage.setItem("playerone",player1);
localStorage.setItem("playertwo",player2);
window.location="game_page.html";
}