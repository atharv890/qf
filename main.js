function submit(){
hi=document.getElementById("username").value;
ji=document.getElementById("password").value; 
localStorage.setItem("player1",hi);
localStorage.setItem("player2",ji);
window.location="game.html";
}