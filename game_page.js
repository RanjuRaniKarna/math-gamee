var player_1 = localStorage.getItem("player1");
var player_2 = localStorage.getItem("player2");

console.log(player_1);
console.log(player_2);

document.getElementById("player1_name").innerHTML=player_1;
document.getElementById("player2_name").innerHTML=player_2;

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question_turn").innerHTML="question_turn :" + player_1;
document.getElementById("answer_turn").innerHTML="answer_turn :" + player_2;

function send(){
word = document.getElementById("word").value;
new_word = word.toLowerCase();

charat1=new_word.charAt(1);
console.log(charat1);

var replace1=new_word.replace(charat1,"_");
console.log(replace1);
}