function choose(){
var choicespot=document.getElementsByClassName("menueContents");
var choices=["About Me","Prodjects"];
choicespot[0].innerHTML="<div class='choosing'><a href='aboutMe.html'>"+choices[0]+"</a></div><div class='choosing'><a href='projects.html'>"+choices[1]+"</a></div>";
}