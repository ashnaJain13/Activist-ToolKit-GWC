var score = 0 

var Q1A1 = document.getElementById('Q1A1');
var Q1A2 = document.getElementById('Q1A2');
var Q1A3 = document.getElementById('Q1A3');

var Q2A1 = document.getElementById('q2a1');
var Q2A2 = document.getElementById('q2a2');
var Q2A3 = document.getElementById('q2a3');

var Q3A1 = document.getElementById('q3a1');
var Q3A2 = document.getElementById('q3a2');
var Q3A3 = document.getElementById('q3a3');

var Q4A1 = document.getElementById('q4a1');
var Q4A2 = document.getElementById('q4a2');
var Q4A3 = document.getElementById('q4a3');

var reset = document.getElementById('restart');
var questionsAnswered = 0;
var result = ""
//Buttons reactions include adding to one speciic outcome, and disabling buttons
Q1A1.addEventListener("click", function() {
  Q1A1.style.backgroundColor = "red";
  Q1A1.disabled = true ; 
  Q1A2.disabled = true ; 
  Q1A3.disabled = true ;
  questionsAnswered +=1;
  result += "                                                         1) This media is not trustworthy. The subject matter itself is highly satirical/sarcastic. There is no way for anything to be biologically related to the moon, much less an astronaut. The quotes included in the article are also very humorous, but not anything an astronaut representing NASA would say. Additionally, the source for this information is The Onion. This is a well known satirical news site. By visiting their website it is clear they are not a credible source for facts or news. Most of their headlines on their site are as improbable and strange as this article."; 

resultsCalc()
});

Q1A2.addEventListener("click", function() {
  Q1A2.style.backgroundColor = "red";
  Q1A1.disabled = true ; 
  Q1A2.disabled = true ; 
  Q1A3.disabled = true ;
  questionsAnswered +=1;
"                                                                     1) This media is not trustworthy. The subject matter itself is highly satirical/sarcastic. There is no way for anything to be biologically related to the moon, much less an astronaut. The quotes included in the article are also very humorous, but not anything an astronaut representing NASA would say. Additionally, the source for this information is The Onion. This is a well known satirical news site. By visiting their website it is clear they are not a credible source for facts or news. Most of their headlines on their site are as improbable and strange as this article."; 

resultsCalc()
});

Q1A3.addEventListener("click", function() {
Q1A3.style.backgroundColor = "red";

    Q1A1.disabled = true ; 
  Q1A2.disabled = true ; 
  Q1A3.disabled = true ;
  
  questionsAnswered +=1;
  score +=1 
  
resultsCalc()
});

Q2A1.addEventListener("click", function() {
Q2A1.style.backgroundColor = "red";
Q2A1.disabled = true; 
Q2A2.disabled = true; 
 Q2A3.disabled = true; 
questionsAnswered += 1; 
score +=1;  

  
resultsCalc()
});

Q2A2.addEventListener("click", function() {
Q2A2.style.backgroundColor = "red";

Q2A1.disabled = true; 
Q2A2.disabled = true; 
Q2A3.disabled = true; 
questionsAnswered += 1; 
score +=1;  

  
resultsCalc()
});

Q2A3.addEventListener("click", function() {
Q2A3.style.backgroundColor = "red";

Q2A1.disabled = true; 
Q2A2.disabled = true; 
Q2A3.disabled = true; 
questionsAnswered += 1; 
result += "                                                           2) This media is trustworthy with room for double checking. The article is fairly short, so there is potential further research to be done, however, the source of the article is trustworthy. The BBC is an accredited news source known for acceptable journalistic standards (this was verified by other fact checking sites). Lastly, although the terminology of this article can seem confusing, when looked up it is all searchable and verifiable from other sources."


  
resultsCalc()
});

Q3A1.addEventListener("click", function() {
Q3A1.style.backgroundColor = "red";
Q3A1.disabled = true ; 
Q3A2.disabled = true ; 
Q3A3.disabled = true; 

score +=1 
questionsAnswered += 1; 

resultsCalc()
});

Q3A2.addEventListener("click", function() {
Q3A2.style.backgroundColor = "red";
Q3A1.disabled = true ; 
Q3A2.disabled = true ; 
Q3A3.disabled = true; 

questionsAnswered += 1; 
result += "                                                           3) This media is trustworthy. First and foremost it comes from a .gov source, which means it is affliated with the US government, and therefore subject to regulation. Additionally, the graph is well-formatted without inconsistencies. The article from which the graph comes from also has in-depth explanation and analysis of the data." 
resultsCalc()
});

Q3A3.addEventListener("click", function() {
Q3A3.style.backgroundColor = "red";
Q3A1.disabled = true ; 
Q3A2.disabled = true ; 
Q3A3.disabled = true; 

questionsAnswered += 1; 
result += "                                                           3) This media is trustworthy. First and foremost it comes from a .gov source, which means it is affliated with the US government, and therefore subject to regulation. Additionally, the graph is well-formatted without inconsistencies. The article from which the graph comes from also has in-depth explanation and analysis of the data." 
resultsCalc()
});

Q4A1.addEventListener("click", function() {
Q4A1.style.backgroundColor = "red";
Q4A1.disabled = true ; 
Q4A2.disabled = true ; 
Q4A3.disabled = true; 

questionsAnswered += 1; 
result += "                                                           4) This media is not trustworthy. The source is Facebook which is a social media site, not a credible site for information on masking or Covid-19. Additionally, the graphic in-text cited source is blurred out. Finally, the last sentence's tone is inflammatory, and sarcastic, which decreases its validity.  "

resultsCalc()
});

Q4A2.addEventListener("click", function() {
Q4A2.style.backgroundColor = "red";
Q4A1.disabled = true ; 
Q4A2.disabled = true ; 
Q4A3.disabled = true; 

questionsAnswered += 1; 
result += " 4) This media is not trustworthy. The source is Facebook which is a social media site, not a credible site for information on masking or Covid-19. Additionally, the graphic in-text cited source is blurred out. Finally, the last sentence's tone is inflammatory, and sarcastic, which decreases its validity."

resultsCalc()
});

Q4A3.addEventListener("click", function() {
Q4A3.style.backgroundColor = "red";
Q4A1.disabled = true ; 
Q4A2.disabled = true ; 
Q4A3.disabled = true; 

questionsAnswered += 1; 
score +=1 ;

resultsCalc()
});

reset.addEventListener("click", function() {
Q3A1.disabled = false ; 
Q3A1.style.backgroundColor = "purple";
  
Q3A2.disabled = false ; 
Q3A2.style.backgroundColor = "purple";

Q3A3.disabled = false; 
Q3A3.style.backgroundColor = "purple";
  
  
Q2A1.disabled = false ; 
Q2A1.style.backgroundColor = "purple";
  
Q2A2.disabled = false ; 
Q2A2.style.backgroundColor = "purple";
  
Q2A3.disabled = false;  
Q2A3.style.backgroundColor = "purple";
  
Q1A1.disabled = false ;
Q1A1.style.backgroundColor = "purple";
  
Q1A2.disabled = false ; 
Q1A2.style.backgroundColor = "purple";
  
Q1A3.disabled = false; 
Q1A3.style.backgroundColor = "purple";
  
Q4A1.disabled = false ; 
Q4A1.style.backgroundColor = "purple";
  
Q4A2.disabled = false ; 
Q4A2.style.backgroundColor = "purple";
  
Q4A3.disabled = false;
Q4A3.style.backgroundColor = "purple";

score = 0; 
questionsAnswered = 0; 
resultsCalc();

document.getElementById("RESULT").innerHTML =   "Please answer all the questions";
});

//Function to calculate results from variable data 
function resultsCalc() {
  console.log(questionsAnswered)
  if (questionsAnswered == 4)
{
     
 document.getElementById("RESULT").innerHTML = "score" + "  " + score + "/4" + "                     " + result;

}else
{
 //If the test condition 1 is FALSE then these statements will be executed
  document.getElementById("RESULT").innerHTML = "Answer all the questions please";}
}



