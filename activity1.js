score = 0;
function updateScore()
{ score = score + 10;
 document.getElementById("score").innerHTML = "Score: " + score; 
}
function saveScore() 
{ localStorage.setItem("Snigdhas_Score", score);
} 
function nextPage() 
{ window.location = "activity_2.html"; }