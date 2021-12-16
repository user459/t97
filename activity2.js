function getScore() 
{ s=localStorage.getItem("Snigdhas_Score");
 document.getElementById("swiggy").innerHTML="<h1>Score="+s+"</h1>"
} 
function prevPage() 
{ window.location = "activity_1.html"; }